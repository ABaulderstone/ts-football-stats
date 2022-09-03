import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];
export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(private path: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.path, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
