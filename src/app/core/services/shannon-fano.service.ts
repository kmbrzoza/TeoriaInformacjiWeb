import { Injectable } from '@angular/core';

import { SFNode } from '../models/shannon-fano.model';

@Injectable({
    providedIn: 'root'
})
export class ShannonFanoService {
    startAlgo(charProbabilities: Record<string, number>): SFNode[] {
        let result: SFNode[] = [];

        for (let key in charProbabilities) {
            result.push({
                symbol: key,
                probability: charProbabilities[key],
                code: ''
            });
        }

        result.sort((a: SFNode, b: SFNode) => b.probability - a.probability);

        return this.divide(result);
    }

    private divide(nodes: SFNode[]): SFNode[] {
        if (nodes.length <= 1) {
            return nodes;
        }

        let totalProbability = 0;
        nodes.forEach((node: SFNode) => totalProbability += node.probability);
        const halfProbab = totalProbability / 2;

        let tempProb = 0.0;
        let index = 0;

        for (let i = 0; i < nodes.length; i++) {
            tempProb += nodes[i].probability;
            if (tempProb >= halfProbab) {
                if (Math.abs(halfProbab - tempProb) < Math.abs(halfProbab - (tempProb - nodes[i].probability))) {
                    index = i;
                }
                break;
            }
            index = i;
        }

        let lowerGroup = nodes.splice(0, index + 1);
        let upperGroup = nodes;

        lowerGroup.forEach((node: SFNode) => node.code += '0');
        upperGroup.forEach((node: SFNode) => node.code += '1');

        let result: SFNode[] = [];

        result = result.concat(this.divide(lowerGroup), this.divide(upperGroup));

        return result;
    }
}
