import { readFl } from "../utils/util_functions";

class Block {

    blockData: Map<number, number>;

    constructor(inputBlockLines: Array<string>) {
        inputBlockLines.forEach(line => {
            if(line.includes('map')) return;

            const datas = line.split(' ');

            const range = {
                dest: parseInt(datas[0]),
                source: parseInt(datas[1]),
                range: parseInt(datas[2]),
            };

            for(var i = Number.parseInt(datas[0]); i < Number.parseInt(datas[2]); i++){

            }

        });
    }

    calcResult(sourceNumber) {

    }
}

const splitted = readFl('input.txt', '-');

function part1() {

    const blocks = splitted;

    blocks.map(block => {
        return new Block(block.split('\n'));
    })
}