import fs from 'fs';
export class CsvFileReader {
  data: string[][] = [];
  constructor(private fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync('./football.csv', { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}