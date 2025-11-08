import { Request, Response } from 'express';
import { Taller01Service } from '../services/taller_01_servicio';

export class Taller01Controller {
    private service: Taller01Service;

    constructor() {
        this.service = new Taller01Service();
    }

    public convertidorTemp = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.convertidorTemp(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public resolvedor = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.resolvedor(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public mejorParidad = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.mejorParidad(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public peorParidad = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = this.service.peorParidad(req.body);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };
}