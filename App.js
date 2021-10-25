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
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import AddDeck from "./components/AddDeck";
import Quiz from "./components/Quiz";

const Tab = createBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarOptions: {
          activeTintColor: Platform.OS === "ios" ? purple : white,
          style: {
            height: 56,
            backgroundColor: Platform.OS === "ios" ? white : purple,
            shadowColor: "rgba( 0,0,0, 0.24)",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 6,
            shadowOpacity: 1,
          },
        },
      }}
    >
      <Tab.Screen
        name="Decks"
        component={DeckContainer}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome5 name="book-reader" size={38} color={purple} />
          ),
        }}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="plus-square" size={38} color={purple} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const store = createStore(reducers, applyMiddleware(logger));

export default function App() {
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

//  function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={MyTab} />
//       <Stack.Screen
//         name="DeckDetail"
//         component={DeckDetail}
//
//       />
//     </Stack.Navigator>
//   );
// }

// export default function Main() {
//   return (
//     <NavigationContainer>
//       <Provider store={store}>
//         <View style={styles.container}>
//           <StatusBar style="auto" />
//           <MyStack />
//         </View>
//       </Provider>
//     </NavigationContainer>
//   );
// }
