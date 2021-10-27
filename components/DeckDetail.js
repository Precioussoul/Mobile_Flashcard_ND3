import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Deck from "./Deck";
import { white, red, gray, purple, lightPurp } from "../utils/color";
import { connect } from "react-redux";
import { removeDeck } from "../actions";
import { removeDeck as RemoveDecksAsync } from "../utils/api";
class DeckDetail extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }
  handleDelete = (id) => {
    const { navigation, dispatch } = this.props;

    dispatch(removeDeck(id));
    RemoveDecksAsync(id);

    navigation.goBack();
  };
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Deck id={deck.title} />
        <View style={{ marginTop: 80 }}>
          <TouchableOpacity
            style={[
              styles.deckContainer,
              { backgroundColor: purple, marginHorizontal: 40 },
            ]}
            onPress={() =>
              this.props.navigation.navigate("AddCard", { title: deck.title })
            }
          >
            <Text style={[styles.deckText, { color: white }]}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.deckContainer,
              { backgroundColor: lightPurp, marginHorizontal: 40 },
            ]}
            onPress={() =>
              this.props.navigation.navigate("Quiz", { title: deck.title })
            }
          >
            <Text style={[styles.deckText, { color: white }]}> Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.deckContainer,
            { backgroundColor: red, marginTop: 80, marginHorizontal: 80 },
          ]}
          onPress={() => this.handleDelete(deck.title)}
        >
          <Text style={{ color: white, textAlign: "auto", fontSize: 20 }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  deckContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 60,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    backgroundColor: white,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4.84,

    elevation: 5,
  },
  deckText: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    color: gray,
  },
});

const mapStateToProps = (state, { route }) => {
  const { title } = route.params;
  const deck = state[title];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(DeckDetail);
