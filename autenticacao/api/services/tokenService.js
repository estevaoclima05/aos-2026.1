import jwt from "jsonwebtoken";
import crypto from "crypto";
import models from "../models";

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY ?? "15m" },
  );
};

const generateRefreshToken = async (user, existingExpiresAt = null) => {
  const token = crypto.randomBytes(64).toString("hex");

  const expiresAt =
    existingExpiresAt ??
    new Date(
      Date.now() +
        Number(process.env.REFRESH_TOKEN_EXPIRY_DAYS ?? 7) *
          24 *
          60 *
          60 *
          1000,
    );

  await models.RefreshToken.create({
    token,
    expiresAt,
    userId: user.id,
  });

  return { token, expiresAt };
};

const generateTokenPair = async (user, existingExpiresAt = null) => {
  const accessToken = generateAccessToken(user);
  const { token: refreshToken, expiresAt } = await generateRefreshToken(
    user,
    existingExpiresAt,
  );

  return { accessToken, refreshToken, expiresAt };
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export default {
  generateAccessToken,
  generateRefreshToken,
  generateTokenPair,
  verifyAccessToken,
};
