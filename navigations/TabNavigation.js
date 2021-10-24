import React from "react";
import { Platform } from "react-native";
import { white, purple } from "../utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import Live from "./Live";
import DeckContainer from "../components/DeckContainer";

const TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(
        {
          Decks: {
            screen: DeckContainer,
            navigationOptions: {
              tabBarLabel: "History",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-bookmark" size={38} color={tintColor} />
              ),
            },
          },
          AddEntry: {
            screen: AddEntry,
            navigationOptions: {
              tabBarLabel: "Add Entry",
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="plus-square" size={30} color={tintColor} />
              ),
            },
          },
        },
        {
          navigationOptions: {
            header: null,
          },
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
        }
      )
    : createMaterialTopTabNavigator(
        {
          Decks: {
            screen: DeckContainer,
            navigationOptions: {
              tabBarLabel: "History",
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-bookmark" size={38} color={tintColor} />
              ),
            },
          },
          AddEntry: {
            screen: AddEntry,
            navigationOptions: {
              tabBarLabel: "Add Entry",
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="plus-square" size={30} color={tintColor} />
              ),
            },
          },
        },
        {
          navigationOptions: {
            header: null,
          },
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
        }
      );

const TabNavigation = createAppContainer(TabNavigator);

export default TabNavigation;
