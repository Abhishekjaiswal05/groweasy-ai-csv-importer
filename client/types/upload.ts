export interface UploadedFile {
  file: File;
  name: string;
  size: number;
  type: string;
}

export interface UploadState {
  selectedFile: UploadedFile | null;
  isDragging: boolean;
  error: string | null;
}