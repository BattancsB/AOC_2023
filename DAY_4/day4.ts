
import { arraySum, readFl } from "../utils/util_functions";

const splitted = readFl('input.txt', '\n');

function scoreCalculator(correctNumberCount: number): number {
    return (correctNumberCount >= 1) ? Math.pow(2, correctNumberCount - 1) : 0;
}

class Card {
    numbers: Set<Number>;
    winningNumbers: Set<Number>;

    constructor(num: Set<Number>, win: Set<Number>) {
        this.numbers = num;
        this.winningNumbers = win;
    }

    evaluate() {
        const numbersOfCorrectNumber = new Set([...this.winningNumbers].filter(element => this.numbers.has(element)));
        return scoreCalculator(numbersOfCorrectNumber.size);
    }

    matchingNumberCount() {
        const numbersOfCorrectNumber = new Set([...this.winningNumbers].filter(element => this.numbers.has(element)));
        return numbersOfCorrectNumber.size;
    }
}

function part1() {
    let sum = 0;
    splitted.forEach(line => {
        const splitted = line.split('|');

        const winningNumbers = new Set(
            splitted[0].split(' ').map(x => {
                const y = Number.parseInt(x);
                return (!isNaN(y)) ? y : -1
            }));

        const numbers = new Set(
            splitted[1].split(' ').map(x => {
                const y = Number.parseInt(x);
                return (!isNaN(y)) ? y : -2
            }));


        const temp = new Card(numbers, winningNumbers);

        sum += temp.evaluate();
    })
    return sum;
};


function part2() {

    function readCards(): Array<Card> {
        let cards = new Array<Card>();

        splitted.forEach(line => {
            const splitted = line.split('|');
            const winningNumbers = new Set(
                splitted[0].split(' ').map(x => {
                    const y = Number.parseInt(x);
                    return (!isNaN(y)) ? y : -1
                }));

            const numbers = new Set(
                splitted[1].split(' ').map(x => {
                    const y = Number.parseInt(x);
                    return (!isNaN(y)) ? y : -2
                }));

            cards.push(new Card(numbers, winningNumbers));
        })
        return cards;
    }

    const cards = readCards();

    let scoreSum = new Array<number>();

    for (let k = 0; k < cards.length; k++) {
        scoreSum.push(1);
    }

    for (let i = 0; i < cards.length; i++) {
        let score = cards[i].matchingNumberCount();

        for (let j = i + 1; j < i + 1 + score; j++) {
            scoreSum[j] += scoreSum[i];
        }
    }

    return arraySum(scoreSum);
};

console.log(part2());