import { TCard, TCardCat } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TState = {
  cards: TCard[];
  isLoading: boolean;
  error: boolean;
  modalCard: null | TCard;
  createdCards: TCardCat[];
};

const initialState: TState = {
  cards: [],
  createdCards: [],
  isLoading: true,
  error: false,
  modalCard: null,
};

export const appReducerSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchPending(state) {
      state.isLoading = true;
    },
    fetchSuccessful(state, action: PayloadAction<TCard[]>) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    fetchFailed(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    openModal(state, action: PayloadAction<TCard | null>) {
      state.isLoading = false;
      state.modalCard = action.payload;
    },
    createdCard(state, action: PayloadAction<TCardCat[]>) {
      state.createdCards = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccessful, fetchFailed, openModal, createdCard } =
  appReducerSlice.actions;
