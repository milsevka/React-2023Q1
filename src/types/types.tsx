export type TCardsArray = {
  cards?: TCard[];
};

export type TCards = {
  card: TCard;
};

export type TSearch = {
  search: string;
};

export type TCard = {
  id: number;
  name: string;
  title: string;
  src: string;
  description: string;
};

export type FormProps = {
  props?: null;
};

export type TCardCat = {
  id: number;
  name: string;
  nameParent: string;
  birthday: string;
  color: string;
  gender: string;
  photo: File;
};

export type FormState = {
  cards: TCardCat[];
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
