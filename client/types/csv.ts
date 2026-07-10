export interface CSVRow {
  [key: string]: string;
}

export interface CSVData {
  headers: string[];
  rows: CSVRow[];
}