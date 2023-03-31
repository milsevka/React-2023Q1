export type TCardsArray = {
  cards?: TCard[];
};

export type TCards = {
  card: TCard;
};

export type TCard = {
  id: number;
  name: string;
  title: string;
  src: string;
  description: string;
};

export type TCardCat = {
  nameCat: string;
  nameParent: string;
  birthday: string;
  color: string;
  male: string;
  photo: File;
  checked?: boolean;
};
