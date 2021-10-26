import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { resetDecks } from "../actions";
import { resetDecks as resetDeckAsync } from "../utils/api";
import { orange, pink, white, purple, lightPurp } from "../utils/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

class ResetDecks extends Component {
  handleReset = () => {
    const { navigation, dispatch } = this.props;

    dispatch(resetDecks());
    resetDeckAsync();
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.Card}>
        <MaterialCommunityIcons name="lock-reset" size={100} color={purple} />
        <Text style={styles.plain}>
          {" "}
          Do you want to reset your Study Decks to Default ?{" "}
        </Text>
        <TouchableOpacity
          style={[styles.boxShadow, styles.smallcard]}
          onPress={this.handleReset}
        >
          <Text style={{ color: white, padding: 10 }}>Reset Decks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 60,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    backgroundColor: white,
    borderRadius: 8,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4.84,

    elevation: 5,
  },
  CardQuestion: {
    fontSize: 26,
    fontStyle: "italic",
    color: orange,
  },
  plain: {
    color: pink,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
  },

  boxShadow: {
    backgroundColor: white,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  smallcard: {
    padding: 10,
    flexDirection: "row",
    marginTop: 60,
    backgroundColor: purple,
    justifyContent: "center",
  },
});

export default connect()(ResetDecks);
