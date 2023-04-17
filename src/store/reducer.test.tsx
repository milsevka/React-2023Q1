import reducer, {
  setSearchNew,
  initialState,
  setIdCards,
  openModalCards,
  createdCard,
} from './reducer';

describe('cards reducer', () => {
  it('reducer for setSearchNew', () => {
    const action = {
      type: 'cards/setSearchNew',
      payload: 'Rick',
    };

    expect(reducer(initialState, setSearchNew('Rick'))).toEqual({
      ...initialState,
      search: action.payload,
    });
  });

  it('reducer for setIdCards', () => {
    const action = {
      type: 'cards/setIdCards',
      payload: '2',
    };

    expect(reducer(initialState, setIdCards('2'))).toEqual({
      ...initialState,
      idCards: action.payload,
    });
  });

  it('reducer for openModalCards', () => {
    const action = {
      type: 'cards/openModalCards',
      payload: true,
    };

    expect(reducer(initialState, openModalCards(true))).toEqual({
      ...initialState,
      isModalOpen: action.payload,
    });
  });

  it('reducer for createdCard', () => {
    const card = [
      {
        id: 2,
        nameCat: 'Kisa',
        nameParent: 'Kisa Kisa',
        birthday: '11-02-1999',
        color: 'light',
        gender: 'male',
        photoFromForm: '../../assets/cards/100.jpg',
      },
    ];
    const action = {
      type: 'cards/createdCard',
      payload: card,
    };

    expect(reducer(initialState, createdCard(card))).toEqual({
      ...initialState,
      createdCards: action.payload,
    });
  });
});
