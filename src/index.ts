import { MatchReader } from './MatchReader';

import { Summary } from './Summary';

const reader = MatchReader.fromCsv('football.csv');
reader.load();
const summary = Summary.winsAnalysisWithHtmlReport('Liverpool');

summary.buildAndPrintReport(reader.matches);
