import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  RECEIVE_DECKS,
  REMOVE_DECK,
  RESET_DECK,
} from "../actions";
import { decks as DefaultDeck } from "../utils/data";
export function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { title } = action;
      return {
        [title]: {
          title,
          questions: [],
        },
      };
    case ADD_CARD_TO_DECK:
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          questions: [...state[title].questions].concat(card),
        },
      };
    case REMOVE_DECK:
      const { id } = action;

      const { [id]: value, ...others } = state;
      console.log("others ", others);
      return others;

    case RESET_DECK:
      return DefaultDeck;

    default:
      return state;
  }
}
