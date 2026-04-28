import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get("/", (req, res) => {
  res.status(200).send(
    "Servidor rodando!"
  );
});

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`API: http://localhost:${PORT}`));
  }
});

export default app;