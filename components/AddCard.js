import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../actions";
import { addCardToDeck as addCardToDeckAsyncStorage } from "../utils/helper";
import { gray, lightPurp, purple, white } from "../utils/color";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  onChangeQuestion = (question) => {
    this.setState({ question });
  };
  onChangeAnswer = (answer) => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    const { navigation, dispatch, title } = this.props;
    console.log("this is title", title);
    const { question, answer } = this.state;
    const card = {
      question,
      answer,
    };
    dispatch(addCardToDeck(title, card));
    addCardToDeckAsyncStorage(title, card);
    navigation.goBack();
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
            onChangeText={this.onChangeQuestion}
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
            onChangeText={this.onChangeAnswer}
            placeholder="Answer"
            // ref={(input) => {
            //   this.answerTextInput = input;
            // }}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchableOpacity style={styles.card} onPress={this.handleSubmit}>
          <Text style={{ color: lightPurp, fontWeight: "bold", fontSize: 17 }}>
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

function mapStateToProps(decks, { route }) {
  const { title } = route.params;

  return {
    title,
  };
}

export default connect(mapStateToProps)(AddCard);
