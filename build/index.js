"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const csvReader = new CsvFileReader_1.CsvFileReader('./football.csv');
const reader = new MatchReader_1.MatchReader(csvReader);
reader.load();
let manUnitedWins = 0;
for (const match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
