import React from "react";
import { Platform } from "react-native";
import { white, purple } from "../utils/color";
import DeckContainer from "../components/DeckContainer";
import AddCard from "../components/AddCard";

// const Tab_Android = createMaterialTopTabNavigator();

// function MyTabs_Android() {
//   return (
//     <Tab_Android.Navigator
//       screenOptions={{
//         header: null,
//         tabBarOptions: {
//           activeTintColor: Platform.OS === "ios" ? purple : white,
//           style: {
//             height: 56,
//             backgroundColor: Platform.OS === "ios" ? white : purple,
//             shadowColor: "rgba( 0,0,0, 0.24)",
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowRadius: 6,
//             shadowOpacity: 1,
//           },
//         },
//       }}
//     >
//       <Tab_Android.Screen
//         name="Decks"
//         component={DeckContainer}
//         options={{
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons name="ios-bookmark" size={38} color={tintColor} />
//           ),
//         }}
//       />
//       <Tab_Android.Screen
//         name="AddCard"
//         component={AddCard}
//         options={{
//           tabBarLabel: "AddCard",
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons name="ios-bookmark" size={38} color={tintColor} />
//           ),
//         }}
//       />
//     </Tab_Android.Navigator>
//   );
// }

// export const TabNavigation = () => {
//   if (Platform === "ios") {
//     return <MyTabs_Iphone />;
//   } else {
//     return <MyTabs_Android />;
//   }
// };
