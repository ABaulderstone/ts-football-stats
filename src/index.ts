import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvReader = new CsvFileReader('./football.csv');
const reader = new MatchReader(csvReader);
reader.load();

let manUnitedWins = 0;

for (const match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`);
