import express from 'express';
import { config } from 'dotenv';
import { errorHandler } from './src/middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import conectarDB from './config/mongoose.config.js';
import cors from 'cors';
import proyectoRouter from './src/routes/proyecto.routes.js';


config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(cors({ 
origin: ['http://localhost:5173', 'https://client-vercel-082024.vercel.app'], //para render
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
credentials: true,
}));

app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use('/api/pirates',  proyectoRouter);

app.get('/api/pirates/health', (req, res) => {
    res.status(200).json ({message: "Servidor activo!"}); //para render
});

conectarDB();

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
})
