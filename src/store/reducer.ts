import { TCard } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TState = {
  cards: TCard[];
  isLoading: boolean;
  error: boolean;
  modalCard: null | TCard;
};

const initialState: TState = {
  cards: [],
  isLoading: true,
  error: false,
  modalCard: null,
};

export const appReducerSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getStarted(state) {
      state.isLoading = true;
    },
    getSuccess(state, action: PayloadAction<TCard[]>) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    getError(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    openModal(state, action: PayloadAction<TCard | null>) {
      state.isLoading = false;
      state.modalCard = action.payload;
    },
  },
});

export const { getStarted, getSuccess, getError, openModal } = appReducerSlice.actions;
