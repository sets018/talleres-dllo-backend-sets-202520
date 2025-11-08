import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from '../../../taller-01.js';

export class Taller01Service {
    public convertidorTemp(data: { celsius: number }) {
        return convertidorTemp(data.celsius);
    }

    public resolvedor(data: { a: number, b: number, c: number, sw: number }) {
        const { a, b, c, sw } = data;
        return resolvedor(a, b, c, sw);
    }

    public mejorParidad(data: { number: number }) {
        return mejorParidad(data.number);
    }

    public peorParidad(data: { number: number }) {
        return peorParidad(data.number);
    }
}