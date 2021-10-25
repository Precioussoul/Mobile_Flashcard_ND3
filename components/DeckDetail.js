import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Deck from "./Deck";
import { white, gray } from "../utils/color";
import { connect } from "react-redux";
import { removeDeck } from "../utils/api";
class DeckDetail extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }
  handleDelete = (id) => {
    const { navigation, dispatch } = this.props;

    dispatch(removeDeck(id));

    navigation.goBack();
  };
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Deck id={deck.title} />
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AddCard", { title: deck.title })
            }
          >
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Quiz", { title: deck.title })
            }
          >
            <Text> Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ color: red }}
          onPress={() => this.handleDelete(deck.title)}
        >
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray,
  },
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.state.param;
  const deck = state[title];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(DeckDetail);
