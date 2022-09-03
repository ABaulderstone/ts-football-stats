import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(private path: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.path, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
