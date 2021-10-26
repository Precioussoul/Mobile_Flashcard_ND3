import React, { Component } from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { purple } from "../utils/color";
import { getDecks } from "../utils/helper";
import Deck from "./Deck";

class DeckContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Study Decks</Text>
        {Object.values(decks).map((deck) => (
          <TouchableOpacity
            key={deck.title}
            onPress={() =>
              navigation.navigate("DeckDetail", { title: deck.title })
            }
          >
            <Deck id={deck.title} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
    color: purple,
  },
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckContainer);
