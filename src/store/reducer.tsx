import { TCardCat } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TState = {
  createdCards: TCardCat[];
  search: string;
  idCards: null | string;
  isModalOpen: boolean;
};

export const initialState: TState = {
  createdCards: [],
  search: '',
  idCards: '',
  isModalOpen: false,
};

export const appReducerSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createdCard(state, action: PayloadAction<TCardCat[]>) {
      state.createdCards = action.payload;
    },
    setSearchNew(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setIdCards(state, action: PayloadAction<string | null>) {
      state.idCards = action.payload;
    },
    openModalCards(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { createdCard, setSearchNew, setIdCards, openModalCards } = appReducerSlice.actions;

export default appReducerSlice.reducer;
