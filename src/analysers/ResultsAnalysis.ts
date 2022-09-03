import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyser } from '../Summary';

export class WinsAnalysis implements Analyser {
  constructor(private team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      }

      if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
