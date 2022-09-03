import { MatchData } from './MatchData';
import { WinsAnalysis } from './analysers/ResultsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(private analyser: Analyser, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
