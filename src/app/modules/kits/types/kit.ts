export enum KitType {
  PLASTIC,
  RESIN
}

export enum ScaleType {
  SMALL = 100,
  MIDDLE = 72,
  LARGE = 35
}

export interface Kit {
  id?: number;
  article: string; // input text
  name: string; // input text
  type: KitType; // input radio
  scale: ScaleType; // select
  description: string | null; // input textarea
  isActive: boolean; // input checkbox
}
