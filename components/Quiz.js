import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { lightPurp, orange, pink, red, white } from "../utils/color";

class Quiz extends Component {
  state = {
    showAnswer: false,
  };

  ShowAnswer = () => {
    if (this.state.showAnswer === false) {
      this.setState({ showAnswer: true });
    } else {
      this.setState({ showAnswer: false });
    }
  };
  render() {
    const { decks } = this.props;
    console.log("this is deck", decks);
    const cardlist = Object.values(decks).map((deck) => deck);
    console.log("this is cardlist", cardlist);
    const questions = cardlist.map((card) => card.questions);
    console.log("questions is here", questions);
    const ReactQuestion = questions[0].map((react) => react.question);
    const ReactAnswer = questions[0].map((react) => react.answer);
    console.log("this is react", ReactQuestion);
    const { showAnswer } = this.state;
    const questionAnswer = showAnswer === true ? ReactAnswer : ReactQuestion;
    return (
      <View>
        <Text style={[styles.plain, { fontSize: 30, marginTop: 10 }]}>
          {" "}
          {showAnswer === false ? "Question" : "Answer"}
        </Text>
        {questionAnswer.map((question) => (
          <View style={styles.Card}>
            <Text key={question} style={styles.CardQuestion}>
              {question}
            </Text>
          </View>
        ))}
        <TouchableOpacity onPress={this.ShowAnswer}>
          <Text style={styles.plain}>
            {showAnswer === false ? "Show Answer" : "Show Question"}
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.plain, { color: lightPurp, fontSize: 14 }]}>
            {" "}
            Press the Button option to guess the Answer{" "}
          </Text>
          <TouchableOpacity
            style={[
              styles.Card,
              { marginHorizontal: 70, backgroundColor: "green" },
            ]}
          >
            <Text style={{ color: white, fontWeight: "bold", fontSize: 22 }}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Card,
              { marginHorizontal: 70, backgroundColor: red },
            ]}
          >
            <Text style={{ color: white, fontWeight: "bold", fontSize: 22 }}>
              Incorrect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Quiz);

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
});
