import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { gray, lightPurp, purple, white } from "../utils/color";

class AddCard extends Component {
  state = {
    value: "",
  };

  onChangeText = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/question.png")}
          />
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={this.onChangeText}
            placeholder="Question"
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => this.answerTextInput.focus()}
            blurOnSubmit={false}
          />
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={this.onChangeText}
            placeholder="Answer"
            // ref={(input) => {
            //   this.answerTextInput = input;
            // }}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchableOpacity style={styles.card}>
          <Text style={{ color: lightPurp, fontWeight: "bold", fontSize: 18 }}>
            Submit
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
  block: {
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 60,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    backgroundColor: white,
    borderRadius: 8,
    marginHorizontal: 80,
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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
  },
});

export default AddCard;
