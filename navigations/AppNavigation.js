import React, { Component } from "react";
import { Text, View } from "react-native";

import DeckDetail from "../components/DeckDetail";
import TabNavigation from "./TabNavigation";
import { purple, white } from "../utils/color";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{
          header: null,
        }}
      />
      <Stack.Screen
        name="DeckDetail"
        component={DeckDetail}
        options={{
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple,
          },
        }}
      />
    </Stack.Navigator>
  );
}

// const Stack = createNativeStackNavigator({
//   Home: {
//     screen: TabNavigation,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   DeckDetail: {
//     screen: DeckDetail,
//     navigationOptions: {
//       headerTintColor: white,
//       headerStyle: {
//         backgroundColor: purple,
//       },
//     },
//   },
// });

const MainNavigation = MyStack();
export default MainNavigation;
