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

export type FormProps = {
  props?: null;
};
export interface CardCat {
  id: number;
  name: string;
  nameParent: string;
  birthday: string;
  color: string;
  gender: string;
  photo: File;
}
export type FormState = {
  cards: CardCat[];
  validate: boolean;
  modal: boolean;
};

export type ErrorsTitle = {
  name: boolean;
  nameParent: boolean;
  birthday: boolean;
  color: boolean;
  photo: boolean;
  gender: boolean;
  checked: boolean;
};
