"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Liverpool');
summary.buildAndPrintReport(reader.matches);
