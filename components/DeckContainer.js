import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { gray, lightPurp, purple } from "../utils/color";
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
      <View style={styles.container}>
        <Text style={styles.title}>Mobile flashcard</Text>
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
      </View>
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
