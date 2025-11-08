import { findMax, findMin, includes, sum, missingNumbers } from '../../../taller-02.js';

export class Taller02Service {
    public findMax(data: { nums_list: number[] }) {
        return findMax(data.nums_list);
    }

    public findMin(data: { nums_list: number[] }) {
        return findMin(data.nums_list);
    }

    public includes(data: { nums_list: number[], target_num: number }) {
        const { nums_list, target_num } = data;
        return includes(nums_list, target_num);
    }

    public sum(data: { nums_list: number[] }) {
        return sum(data.nums_list);
    }

    public missingNumbers(data: { nums_list: number[] }) {
        return missingNumbers(data.nums_list);
    }
}