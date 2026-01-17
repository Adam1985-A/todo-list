import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import AppDataSource from './database/data-source.js';
import todoRoutes from './routes/todo.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/todos', todoRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});