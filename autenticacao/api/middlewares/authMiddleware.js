import jwt from "jsonwebtoken";
import { tokenService, userService } from "../services";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return next();
  }

  try {
    const payload = tokenService.verifyAccessToken(token);
    const user = await userService.getUserById(payload.id);

    if (!user) {
      return res.status(401).send({ error: "Unauthorized: user not found." });
    }

    req.context.me = user;
    return next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).send({ error: "Unauthorized: token expired." });
    }

    return next();
  }
};

export default authMiddleware;
