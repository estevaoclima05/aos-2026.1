import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tarefaRoutes from './routes/tarefa.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tarefas', tarefaRoutes);

app.get("/", (req, res) => {
  res.status(200).send(
    "Servidor rodando!"
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;