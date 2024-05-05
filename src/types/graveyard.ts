export type IGraveyardItem = {
  id?: string;
  fellesraadId?: string;
  name?: string;
  location?: string;
  picture?: string[];
  content?: string;
  newsLink?: string;
  forecastLink?: string;
  approved?: boolean;
  createdAt?: Date;
  updateAt?: Date;
};

export type IImageType = File[];
