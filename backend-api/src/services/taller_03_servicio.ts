import { desglosarString, twoSum, conversionRomana, descomposicion } from '../../../taller-03.js';

export class Taller03Service {
    public desglosarString(data: { input_string: string, type: string }) {
        const { input_string, type } = data;
        return desglosarString(input_string, type);
    }

    public twoSum(data: { list_nums: number[], num: number }) {
        const { list_nums, num } = data;
        return twoSum(list_nums, num);
    }

    public conversionRomana(data: { roman_number: string }) {
        return conversionRomana(data.roman_number);
    }

    public descomposicion(data: { input_string: string }) {
        return descomposicion(data.input_string);
    }
}