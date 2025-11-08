import { Request, Response } from 'express';
import { Taller02Service } from '../services/taller_02_servicio';

export class Taller02Controller {
    private service: Taller02Service;

    constructor() {
        this.service = new Taller02Service();
    }

    public findMax = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.findMax(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public findMin = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.findMin(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public includes = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.includes(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public sum = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.sum(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public missingNumbers = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.missingNumbers(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };
}