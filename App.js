import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
import logger from "redux-logger";
import DeckContainer from "./components/DeckContainer";
import AppNavigation from "./navigations/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
const store = createStore(reducers, applyMiddleware(logger));

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <DeckContainer />
          <AppNavigation />
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
