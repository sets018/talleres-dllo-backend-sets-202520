import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taller01Routes from './routes/taller_01_rutas';
import taller02Routes from './routes/taller_02_rutas';
import taller03Routes from './routes/taller_03_rutas';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API Routes
app.use('/api/taller01', taller01Routes);
app.use('/api/taller02', taller02Routes);
app.use('/api/taller03', taller03Routes);

// Error handling for undefined routes
app.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource does not exist'
    });
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    console.log('Available endpoints:');
    console.log('  - /api/taller01/*');
    console.log('  - /api/taller02/*');
    console.log('  - /api/taller03/*');
    console.log('  - /health');
});

export default app;