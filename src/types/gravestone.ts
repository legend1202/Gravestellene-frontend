export type IGravestoneItem = {
  id?: string;
  graveyardId: string;
  name: string;
  gender: 'MAN' | 'WOMEN';
  birthday: string;
  deceasedDate: string;
  buriedDate: string;
  quarter: string;
  graveSite: string;
  homeTown: string;
  graveSiteNumber: string;
  burriedWith?: string;
  approved?: boolean;
  createdAt?: Date;
  updateAt?: Date;
};
