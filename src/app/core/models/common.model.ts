export type CodingForm = {
    value: string;
};

export type CommonResult = {
    charCounts: Record<string, number>;
    probabilityOfChars: Record<string, number>;
    time: number;
    entropia: number;
};

export type Lookup = {
    name: string;
    value: number;
};
