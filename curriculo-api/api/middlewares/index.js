export const errorHandler = (err, req, res, next) => {
  const status = err.status || 400;
  res.status(status).json({
    error: true,
    message: err.name.includes('Sequelize') ? "Erro no Banco: " + err.message : err.message
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({ error: true, message: "Rota inexistente" });
};