import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
import logger from "redux-logger";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckDetail from "./components/DeckDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckContainer from "./components/DeckContainer";
import AddCard from "./components/AddCard";
import { white, purple } from "./utils/color";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import AddDeck from "./components/AddDeck";
import Quiz from "./components/Quiz";
import ResetDecks from "./components/ResetDecks";
import { Component } from "react";
import { setLocalNotification } from "./utils/api";

const Tab = createBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          margin: 0,
          padding: 0,
        },
        tabBarOptions: {
          activeTintColor: Platform.OS === "ios" ? purple : white,
          style: {
            height: 56,
            backgroundColor: Platform.OS === "ios" ? white : purple,
          },
        },
      }}
    >
      <Tab.Screen
        name="Decks"
        component={DeckContainer}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="folder-table"
              size={35}
              color={purple}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: () => (
            <AntDesign name="pluscircle" size={35} color={purple} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ResetDecks}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={35} color={purple} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const store = createStore(reducers, applyMiddleware(logger));

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: white,
              headerStyle: {
                backgroundColor: purple,
              },
            }}
          >
            <Stack.Screen name="Flashcard" component={MyTab} />
            <Stack.Screen name="DeckDetail" component={DeckDetail} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
