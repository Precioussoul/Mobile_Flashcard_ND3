import AsyncStorage from "@react-native-async-storage/async-storage";
import { decks } from "./data";
import { DECK_INFORMATION_KEY } from "./helper";
import * as Notifications from "expo-notifications";

const NOTIFICATION_KEY = "Mobile_flashcard:notifications";
const ChannelID = "Mobile_FlashCard: DailyReminder";

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

export async function clearLocalNotification() {
  return await AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function CreateChannel() {
  return {
    name: "Mobile Flashcard Reminder",
    importance: Notifications.AndroidImportance.HIGH,
    sound: "bell.wav", // <- for Android 8.0+, see channelId property below
    priority: "high",
  };
}

function createNotification() {
  return {
    title: "Mobile Flashcard Reminder 📬",
    body: "👋 Don't Forget to Study your Flashcard Today 📖",
    sound: "bell.wav",
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (!data) {
        Notifications.requestPermissionsAsync().then(({ status }) => {
          console.log("Notification permissions status:", status);
          if (status === "granted") {
            Notifications.setNotificationChannelAsync(
              ChannelID,
              CreateChannel()
            ).then(() => {
              Notifications.cancelAllScheduledNotificationsAsync();

              Notifications.setNotificationHandler({
                handleNotification: async () => ({
                  shouldShowAlert: true,
                  shouldPlaySound: true,
                  shouldSetBadge: false,
                }),
              });

              // const tomorrow = new Date();

              // tomorrow.setDate(tomorrow.getDate() + 1);
              // tomorrow.setHours(20);
              // tomorrow.setMinutes(0);

              // i don't think this method is not supported for the latest documentation and notification only work when build, i guessed

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  seconds: 20,

                  minute: 0,
                  repeats: true,
                  channelId: ChannelID,
                },
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            });
          }
        });
      }
    });
}
