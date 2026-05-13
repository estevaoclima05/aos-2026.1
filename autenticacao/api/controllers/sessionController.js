import models from "../models";
import { userService, tokenService } from "../services";

const getSession = async (req, res) => {
  const user = await userService.getUserById(req.context.me.id);

  if (!user) {
    return res.status(404).send();
  }

  return res.status(200).send(user);
};

const login = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).send({ error: "Login and password are required." });
  }

  const user = await models.User.findByLogin(login);

  if (!user) {
    return res.status(401).send({ error: "Invalid credentials." });
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    return res.status(401).send({ error: "Invalid credentials." });
  }

  const { accessToken, refreshToken, expiresAt } =
    await tokenService.generateTokenPair(user);

  return res.status(200).send({ accessToken, refreshToken, expiresAt });
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).send({ error: "Refresh token is required." });
  }

  const record = await models.RefreshToken.findOne({
    where: { token: refreshToken },
  });

  if (!record) {
    return res.status(404).send({ error: "Refresh token not found." });
  }

  await record.destroy();

  return res.status(204).send();
};

const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).send({ error: "Refresh token is required." });
  }

  const record = await models.RefreshToken.findOne({
    where: { token: refreshToken },
    include: [{ model: models.User }],
  });

  if (!record) {
    return res.status(401).send({ error: "Invalid refresh token." });
  }

  if (new Date() > record.expiresAt) {
    await record.destroy();
    return res.status(401).send({ error: "Refresh token expired." });
  }

  const originalExpiresAt = record.expiresAt;
  const user = record.user;

  await record.destroy();

  const {
    accessToken,
    refreshToken: newRefreshToken,
    expiresAt,
  } = await tokenService.generateTokenPair(user, originalExpiresAt);

  return res.status(200).send({
    accessToken,
    refreshToken: newRefreshToken,
    expiresAt,
  });
};

export default {
  getSession,
  login,
  logout,
  refresh,
};
