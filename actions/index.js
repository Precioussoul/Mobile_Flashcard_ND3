export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const RESET_DECK = "REMOVE_DECK";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
}

export function resetDecks() {
  return {
    type: RESET_DECK,
  };
}
