import { readFl } from "../utils/util_functions";
import { wordsToNumbers } from 'words-to-numbers';

const splitted = readFl('input.txt', '\n');

function part1() {
    let sum = 0;
    splitted.forEach(line => {
        var firstNum: string = '';
        var lastNum: string = '';
        let i = 0;
        while (i < line.length) {
            if (line.charAt(i).charCodeAt(0) >= '1'.charCodeAt(0) && line.charAt(i).charCodeAt(0) <= '9'.charCodeAt(0)) {
                firstNum = firstNum === '' ? line.charAt(i) : firstNum;
                lastNum = line.charAt(i);
            };
            i++;
        }

        const finalNum = firstNum + lastNum;
        if (firstNum !== ' ') {
            sum = sum + Number.parseInt(finalNum);
        }
    })
    return sum;
};

function part2() {
    let sum = 0;
    splitted.forEach(line => {
        let reg = new RegExp(/one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9/, 'g');
        const matches: string[] = [];
        let match;

        while ((match = reg.exec(line)) !== null) {
            matches.push(match[0]);
        }

        if (matches.length != 0) {
            var firstNum: number | null | string = -1;
            var lastNum: number | null | string = -1;

            if (!(firstNum = Number.parseInt(matches[0]))) {
                firstNum = wordsToNumbers(matches[0]);
            }

            if (!(lastNum = Number.parseInt(matches[matches.length - 1]))) {
                lastNum = wordsToNumbers(matches[matches.length - 1]);
            }


            const finalNum = String(firstNum) + String(lastNum);
            console.log(finalNum);

            if (firstNum !== -1) {
                sum = sum + Number.parseInt(finalNum);
            }
        }
    })
    return sum;
};

console.log(part2());