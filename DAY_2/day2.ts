
import { readFl } from "../utils/util_functions";

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

    class keyValue {
        multiplier: number;
        value: number

        constructor(key: number, value: number){
            this.multiplier = key;
            this.value = value;
        }
    };

    let scoreSum = new Array<keyValue>()

    for (let k = 0; k < cards.length; k++) {
        scoreSum.push(new keyValue(1, 0)); 
    }

    for (let i = 0; i < cards.length;  i++) {
        let score = cards[i].matchingNumberCount();

        console.log('score: ' + score);

        scoreSum[i].value = score;

        for (let j = i + 1; j < i + score;  j++) {
            cards[j]
            scoreSum[j].multiplier++;
        }
    }

     let sum = 0;

    scoreSum.forEach(x => {
        sum += x.multiplier * x.value;
    })
    return sum;
};

console.log(part2());