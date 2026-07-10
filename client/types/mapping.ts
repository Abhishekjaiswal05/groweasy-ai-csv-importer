export interface HeaderMapping {
  originalColumn: string;
  mappedField: string;
  confidence: number;
}

export interface MappingResponse {
  mappings: HeaderMapping[];
}