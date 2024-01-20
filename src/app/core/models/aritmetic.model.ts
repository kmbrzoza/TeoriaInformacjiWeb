import { CommonResult } from './common.model';

export type AritmeticResult = CommonResult & {
    result: number;
    inputValue: string;
    decodedValue: string;
    percentageOfCorrectDecodedValue: number;
}
