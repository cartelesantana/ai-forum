export interface Batch {
  id: number;
  type: "video" | "image";
  src?: string;
  title: string;
  description?: string;
}
