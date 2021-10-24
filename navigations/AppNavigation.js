import DeckDetail from "../components/DeckDetail";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
});
const MainNavigation = createAppContainer(createSwitchNavigator({ Stack }));
export default MainNavigation;
