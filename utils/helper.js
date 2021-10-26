import AsyncStorage from "@react-native-async-storage/async-storage";
import { decks } from "./data";

export const DECK_INFORMATION_KEY = "Mobile_flashcard: Deck";

export async function getDecks() {
  try {
    const result = await AsyncStorage.getItem(DECK_INFORMATION_KEY);

    if (result === null) {
      AsyncStorage.setItem(DECK_INFORMATION_KEY, JSON.stringify(decks));
    }
    console.log("Async result", result);

    return result === null ? decks : JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

export async function getDeck(id) {
  try {
    const result = await AsyncStorage.getItem(DECK_INFORMATION_KEY);
    return result !== null ? JSON.parse(result)[id] : null;
  } catch (e) {
    console.log(e);
  }
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const deck = await getDeck(title);

    AsyncStorage.mergeItem(
      DECK_INFORMATION_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export const DisplayScreen = {
  DisplayQuestion: "DisplayQuestion",
  DisplayAnswer: "DisplayAnswer",
  DisplayResults: "DisplayResults",
};

export const Response = {
  correct: "correct",
  Incorrect: "incorrect",
};
