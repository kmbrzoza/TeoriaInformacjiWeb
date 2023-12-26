import { CommonResult } from './common.model';

export type SFNode = {
    symbol: string;
    probability: number;
    code: string;
};

export type ShannonFanoResult = CommonResult & {
    result: SFNode[];
    L: number;
    n: number;
    rozwleklosc: number;
    codeEfficienty: number;
}
