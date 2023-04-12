export type TCardsArray = {
  cards?: TCard[];
  loaded?: boolean;
  error?: boolean;
};

export type TCards = {
  card: TCard;
  onClick?: () => void;
};

export type TCard = {
  id: number;
  name: string;
  image: string;
  gender?: string;
  species: string;
  location?: {
    name?: string;
  };
};
export type TCardModal = {
  card: null | TCard;
  open: boolean;
  loaded: boolean;
  close: () => void;
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
