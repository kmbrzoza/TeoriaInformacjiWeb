import { CommonResult } from './common.model';

export type SNode = {
    symbol: string;
    probability: number;
    code: string;
    LS: number;
};

export type ShannonResult = CommonResult & {
    result: SNode[];
    L: number;
    n: number;
    rozwleklosc: number;
    codeEfficienty: number;
}
