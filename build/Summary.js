"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const ResultsAnalysis_1 = require("./analysers/ResultsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new ResultsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
