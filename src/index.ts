import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('./football.csv');
reader.read();

let manUnitedWins = 0;

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`);
