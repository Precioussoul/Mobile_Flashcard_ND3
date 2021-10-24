import AsyncStorage from "@react-native-async-storage/async-storage";
import { decks } from "./data";
import { DECK_INFORMATION_KEY } from "./helper";

export async function removeDeck(id) {
  try {
    const result = await AsyncStorage.getItem(DECK_INFORMATION_KEY);
    const data = JSON.parse(result);
    data[id] = undefined;
    delete data[id];
    AsyncStorage.setItem(DECK_INFORMATION_KEY, JSON.stringify(decks));
  } catch (e) {
    console.log(e);
  }
}

export async function resetDecks() {
  try {
    AsyncStorage.setItem(DECK_INFORMATION_KEY, JSON.stringify(decks));
  } catch (e) {
    console.log(e);
  }
}
