import React from "react";
import { Platform } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { white, purple } from "../utils/color";
import DeckContainer from "../components/DeckContainer";
import AddCard from "../components/AddCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab_Android = createMaterialTopTabNavigator();

function MyTabs_Android() {
  return (
    <Tab_Android.Navigator
      screenOptions={{
        header: null,
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
      <Tab_Android.Screen
        name="Decks"
        component={DeckContainer}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-bookmark" size={38} color={tintColor} />
          ),
        }}
      />
      <Tab_Android.Screen
        name="AddCard"
        component={AddCard}
        options={{
          tabBarLabel: "AddCard",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-bookmark" size={38} color={tintColor} />
          ),
        }}
      />
    </Tab_Android.Navigator>
  );
}

const Tab_Iphone = createBottomTabNavigator();

function MyTabs_Iphone() {
  return (
    <Tab_Iphone.Navigator
      screenOptions={{
        header: null,
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
      <Tab_Iphone.Screen
        name="Decks"
        component={DeckContainer}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-bookmark" size={38} color={tintColor} />
          ),
        }}
      />
      <Tab_Iphone.Screen
        name="AddCard"
        component={AddCard}
        options={{
          tabBarLabel: "AddCard",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-bookmark" size={38} color={tintColor} />
          ),
        }}
      />
    </Tab_Iphone.Navigator>
  );
}

//         screen: DeckContainer,
//         navigationOptions: {
//           tabBarLabel: "History",
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons name="ios-bookmark" size={38} color={tintColor} />
//           ),
//         },
//       },
//       AddCard: {
//         screen: AddCard,
//         navigationOptions: {
//           tabBarLabel: "Add Entry",
//           tabBarIcon: ({ tintColor }) => (
//             <FontAwesome name="plus-square" size={30} color={tintColor} />
//           ),
//         },
//       },
//     },
//     {
//       navigationOptions: {
//         header: null,
//       },
//       tabBarOptions: {
//         activeTintColor: Platform.OS === "ios" ? purple : white,
//         style: {
//           height: 56,
//           backgroundColor: Platform.OS === "ios" ? white : purple,
//           shadowColor: "rgba( 0,0,0, 0.24)",
//           shadowOffset: {
//             width: 0,
//             height: 3,
//           },
//           shadowRadius: 6,
//           shadowOpacity: 1,
//         },
//       },
//     }
//   )
// : createMaterialTopTabNavigator(
//     {
//       Decks: {
//         screen: DeckContainer,
//         navigationOptions: {
//           tabBarLabel: "History",
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons name="ios-bookmark" size={38} color={tintColor} />
//           ),
//         },
//       },
//       AddCard: {
//         screen: AddCard,
//         navigationOptions: {
//           tabBarLabel: "Add Entry",
//           tabBarIcon: ({ tintColor }) => (
//             <FontAwesome name="plus-square" size={30} color={tintColor} />
//           ),
//         },
//       },
//     },
//     {
//       navigationOptions: {
//         header: null,
//       },
//       tabBarOptions: {
//         activeTintColor: Platform.OS === "ios" ? purple : white,
//         style: {
//           height: 56,
//           backgroundColor: Platform.OS === "ios" ? white : purple,
//           shadowColor: "rgba( 0,0,0, 0.24)",
//           shadowOffset: {
//             width: 0,
//             height: 3,
//           },
//           shadowRadius: 6,
//           shadowOpacity: 1,
//         },
//       },
//     }
//   );

const TabNavigation = Platform === "ios" ? MyTabs_Iphone() : MyTabs_Android();

export default TabNavigation;
