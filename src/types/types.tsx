export type TCardsArray = {
  cards?: TCard[];
};

export type TCards = {
  card: TCard;
  onClick?: () => void;
};

export type TCard = {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
};

export type TCardCat = {
  nameCat: string;
  nameParent: string;
  birthday: string;
  color: string;
  gender: string;
  photo: File;
  checked?: boolean;
};
