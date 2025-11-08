import { Request, Response } from 'express';
import { Taller03Service } from '../services/taller_03_servicio';

export class Taller03Controller {
    private service: Taller03Service;

    constructor() {
        this.service = new Taller03Service();
    }

    public desglosarString = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.desglosarString(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public twoSum = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.twoSum(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public conversionRomana = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.conversionRomana(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public descomposicion = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.descomposicion(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };
}