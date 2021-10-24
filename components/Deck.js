import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { gray, white } from "../utils/color";

class Deck extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View style={styles.deckContainer}>
        <View>
          <Text style={styles.deckText}>{deck.title}</Text>
        </View>
        <View>
          <Text style={styles.cardText}>{deck.questions.length} card</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

function mapStateToProps(decks, { id }) {
  return {
    deck: decks[id],
  };
}

export default connect(mapStateToProps)(Deck);
