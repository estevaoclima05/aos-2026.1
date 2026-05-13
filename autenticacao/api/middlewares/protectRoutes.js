const PUBLIC_POST_ROUTES = ["/session", "/session/refresh", "/users"];

const PROTECTED_GET_ROUTES = ["/session"];

const protectRoutes = (req, res, next) => {
  const method = req.method.toUpperCase();
  const path = req.path;

  if (method === "GET" && PROTECTED_GET_ROUTES.includes(path)) {
    if (!req.context.me) {
      return res.status(401).send({ error: "Unauthorized." });
    }
    return next();
  }

  if (["POST", "PUT", "DELETE"].includes(method)) {
    const isPublic = PUBLIC_POST_ROUTES.includes(path);

    if (!isPublic && !req.context.me) {
      return res.status(401).send({ error: "Unauthorized." });
    }
  }

  return next();
};

export default protectRoutes;
