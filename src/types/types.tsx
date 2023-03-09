export interface ICardList {
  cards?: ICard[];
}
export interface IHomePage {
  cards?: ICard[];
}
export interface ICards {
  card: ICard;
}

export interface ICard {
  id: number;
  name: string;
  title: string;
  src: string;
  description: string;
}
