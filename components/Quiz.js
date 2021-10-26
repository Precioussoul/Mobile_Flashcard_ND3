import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import {
  gray,
  lightPurp,
  orange,
  pink,
  purple,
  red,
  white,
} from "../utils/color";
import PagerView from "react-native-pager-view";

const DisplayScreen = {
  DisplayQuestion: "DisplayQuestion",
  DisplayAnswer: "DisplayAnswer",
  DisplayResults: "DisplayResults",
};

const Response = {
  correct: "correct",
  Incorrect: "incorrect",
};
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.Myref = React.createRef(PagerView);
  }
  state = {
    showAnswer: false,
    screen: DisplayScreen.DisplayQuestion,
    correctCount: 0,
    IncorrectCount: 0,
    questionCount: this.props.deck.questions.length,
    answerCount: new Array(this.props.deck.questions.length).fill(0),
  };
  toggleQuestionAnswer = () => {
    if (this.state.showAnswer === false) {
      this.setState({ showAnswer: true });
    } else {
      this.setState({ showAnswer: false });
    }
  };

  handleAnswer = (response, page) => {
    if (response === Response.correct) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        IncorrectCount: prevState.IncorrectCount + 1,
      }));
    }
    this.setState(
      (prevState) => ({
        answerCount: prevState.answerCount.map((ans, idx) =>
          page === idx ? 1 : ans
        ),
      }),
      () => {
        const { correctCount, IncorrectCount, questionCount } = this.state;

        if (questionCount === correctCount + IncorrectCount) {
          this.setState({ screen: DisplayScreen.DisplayResults });
        } else {
          this.Myref.current.setPage(page + 1);
          this.setState(() => ({
            screen: DisplayScreen.DisplayQuestion,
          }));
        }
      }
    );
  };

  handleReset = () => {
    this.setState((prevState) => ({
      screen: DisplayScreen.DisplayQuestion,
      correctCount: 0,
      IncorrectCount: 0,
      answerCount: Array(prevState.questionCount).fill(0),
    }));
  };

  render() {
    const { questions } = this.props.deck;
    const { showAnswer, answerCount } = this.state;
    console.log("this is answeredCount", answerCount);

    if (questions.length === 0) {
      return (
        <View style={[styles.Card, { flex: 0.7, marginTop: 20 }]}>
          <View style={{ margin: 20 }}>
            <Text style={[styles.plain, { textAlign: "center", fontSize: 20 }]}>
              You cannot take a quiz because there are no cards in this deck.
            </Text>
            <Text style={{ textAlign: "center", paddingTop: 10 }}>
              Please add some cards and try again.
            </Text>
            <TouchableOpacity
              style={[styles.Card, { backgroundColor: purple, marginTop: 70 }]}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={{ color: white }}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    //

    if (this.state.screen === DisplayScreen.DisplayResults) {
      const { correctCount, questionCount } = this.state;
      const percent = ((correctCount / questionCount) * 100).toFixed(0);
      const resultStyle = percent >= 100 ? styles.correct : styles.Incorrect;
      const IconColor = percent >= 100 ? styles.success : styles.low;

      return (
        <View style={styles.Card}>
          <View style={{ margin: 10 }}>
            {percent >= 100 ? (
              <Ionicons name="checkmark-circle" size={100} style={IconColor} />
            ) : (
              <Ionicons name="ios-timer-sharp" size={100} style={IconColor} />
            )}
          </View>
          <View style={{ margin: 10 }}>
            <Text style={[styles.plain, { textAlign: "center" }]}>
              Quiz Complete!
            </Text>
            <Text style={resultStyle}>
              {correctCount} / {questionCount} correct
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={[styles.plain, { textAlign: "center" }]}>
              Percentage correct
            </Text>
            <Text style={resultStyle}>{percent}%</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.Card,
                { backgroundColor: purple, borderColor: white },
              ]}
              onPress={this.handleReset}
            >
              <Text style={{ color: white }}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Card, { backgroundColor: orange }]}
              onPress={() => {
                this.handleReset();
                this.props.navigation.navigate("Flashcard");
              }}
            >
              <Text style={{ color: white }}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <PagerView style={{ flex: 1 }} initialPage={0} ref={this.Myref}>
        {questions.map((card, idx) => (
          <View key={idx}>
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 20, color: purple, margin: 10 }}>
                {idx + 1} / {questions.length}
              </Text>
            </View>
            <View style={styles.Card}>
              <Text
                style={[
                  styles.plain,
                  {
                    textDecorationLine: "underline",
                    marginBottom: 10,
                    color: lightPurp,
                  },
                ]}
              >
                {showAnswer === false ? "Question" : "Answer"}
              </Text>
              <Text key={idx} style={styles.CardQuestion}>
                {showAnswer === false ? card.question : card.answer}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={this.toggleQuestionAnswer}>
                <Text style={styles.plain}>
                  {showAnswer === false ? "Show Answer" : "Show Question"}
                </Text>
              </TouchableOpacity>
            </View>
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
                onPress={() => this.handleAnswer(Response.correct, idx)}
              >
                <Text
                  style={{ color: white, fontWeight: "bold", fontSize: 22 }}
                >
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.Card,
                  { marginHorizontal: 70, backgroundColor: red },
                ]}
                onPress={() => this.handleAnswer(Response.Incorrect, idx)}
              >
                <Text
                  style={{ color: white, fontWeight: "bold", fontSize: 22 }}
                >
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </PagerView>

      //   <View>
      //     <Text style={[styles.plain, { fontSize: 30, marginTop: 10 }]}>
      //       {" "}
      //       {showAnswer === false ? "Question" : "Answer"}
      //     </Text>
      //     {questions.map((card, idx) => (
      //       <View>
      //         <View style={{ marginBottom: 15 }}>
      //           <Text style={{ fontSize: 20 }}>
      //             {idx + 1} / {questions.length}
      //           </Text>
      //         </View>
      //         <View style={styles.Card} key={idx}>
      //           <Text key={idx} style={styles.CardQuestion}>
      //             {showAnswer === false ? card.question : card.answer}
      //           </Text>
      //         </View>
      //       </View>
      //     ))}
      //     <TouchableOpacity onPress={this.ShowAnswer}>
      //       <Text style={styles.plain}>
      //         {showAnswer === false ? "Show Answer" : "Show Question"}
      //       </Text>
      //     </TouchableOpacity>
      //     <View style={{ marginTop: 20 }}>
      //       <Text style={[styles.plain, { color: lightPurp, fontSize: 14 }]}>
      //         {" "}
      //         Press the Button option to guess the Answer{" "}
      //       </Text>
      //       <TouchableOpacity
      //         style={[
      //           styles.Card,
      //           { marginHorizontal: 70, backgroundColor: "green" },
      //         ]}
      //       >
      //         <Text style={{ color: white, fontWeight: "bold", fontSize: 22 }}>
      //           Correct
      //         </Text>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={[
      //           styles.Card,
      //           { marginHorizontal: 70, backgroundColor: red },
      //         ]}
      //       >
      //         <Text style={{ color: white, fontWeight: "bold", fontSize: 22 }}>
      //           Incorrect
      //         </Text>
      //       </TouchableOpacity>
      //     </View>
      //   </View>
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

  correct: {
    color: "green",
    fontSize: 46,
    textAlign: "center",
  },
  Incorrect: {
    color: red,
    fontSize: 46,
    textAlign: "center",
  },
  success: {
    color: "green",
  },
  low: {
    color: "#9b2226",
  },
});

function mapStateToProps(decks, { route }) {
  const { title } = route.params;
  const deck = decks[title];
  return {
    deck,
  };
}

export default connect(mapStateToProps)(Quiz);
