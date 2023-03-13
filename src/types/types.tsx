export interface ICardsArray {
  cards?: ICard[];
}

export interface ICards {
  card: ICard;
}

export type ISearch = {
  search: string;
};

export interface ICard {
  id: number;
  name: string;
  title: string;
  src: string;
  description: string;
}
