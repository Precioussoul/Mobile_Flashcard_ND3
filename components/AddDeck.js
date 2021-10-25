import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { gray, lightPurp, orange, purple, white } from "../utils/color";
export default class AddDeck extends Component {
  state = {
    text: "",
  };
  handleChange = (text) => {
    this.setState({ text });
  };

  handleSubmit = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={this.handleChange}
            placeholder="Name your deck"
            autoFocus={true}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.deckContainer,
            { marginHorizontal: 60, marginTop: 40, backgroundColor: orange },
          ]}
          onPress={this.handleSubmit}
          disabled={this.state.text === ""}
        >
          <Text style={{ color: white, fontSize: 20 }}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e3e3e3",
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
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: purple,
    fontStyle: "italic",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: purple,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20,
  },
});
