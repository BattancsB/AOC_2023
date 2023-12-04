"use strict";
exports.__esModule = true;
var util_functions_1 = require("../utils/util_functions");
var splitted = (0, util_functions_1.readFl)('input.txt', '\n');
function part1() {
    splitted.forEach(function (line) {
        var firstNum = '';
        var lastNum = '';
        for (var i = 0; i++; i < line.length) {
            if (line.charAt(i).charCodeAt(0) >= '1'.charCodeAt(0) && line.charAt(i).charCodeAt(0) <= '9'.charCodeAt(0)) {
                firstNum = firstNum === '' ? line.charAt(i) : firstNum;
                lastNum = line.charAt(i);
            }
            ;
        }
        var finalNum = firstNum + lastNum;
        return Number(finalNum);
    });
}
;
console.log(part1());
