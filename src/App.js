import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/button_component";
import ValidationCountComponent from "./components/validation_count_component";
import QuestionComponent from "./components/question_component";

class App extends React.Component {
  state = {
    correct_count: 0,
    incorrect_count: 0,
    question_1: 0,
    question_2: 0,
    answers: [0, 0, 0, 0]
  };

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generate_question() {
    let question_1 = Math.floor(Math.random() * 10);
    let question_2 = Math.floor(Math.random() * 10);
    let answer = question_1 * question_2;
    let random_answer_1 = Math.floor(Math.random() * 100);
    let random_answer_2 = Math.floor(Math.random() * 100);
    let random_answer_3 = Math.floor(Math.random() * 100);
    let answers = [answer, random_answer_1, random_answer_2, random_answer_3];

    this.setState({
      question_1: question_1,
      question_2: question_2,
      answers: this.shuffle(answers)
    });
  }

  componentDidMount() {
    this.generate_question();
  }

  check_answer(answer) {
    if (this.state.question_1 * this.state.question_2 == answer) {
      this.setState({
        correct_count: this.state.correct_count + 1
      });
    } else {
      this.setState({
        incorrect_count: this.state.incorrect_count + 1
      });
    }
    this.generate_question();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={home}>
          <div className="col">
            <div className="row text-center">
              <div className="col" style={{ fontSize: "30px" }}>
                Quizzy
              </div>
            </div>
            <br></br>
            <div className="row mx-auto">
              <div className="col">
                <ValidationCountComponent
                  name="Correct"
                  count={this.state.correct_count}
                />
              </div>
              <div className="col">
                <ValidationCountComponent
                  name="Incorrect"
                  count={this.state.incorrect_count}
                />
              </div>
            </div>
            <br></br>
            <div className="row text-center">
              <div className="col ">
                <QuestionComponent
                  question_1={this.state.question_1}
                  question_2={this.state.question_2}
                  answer={this.state.answer}
                />
              </div>
            </div>
            <br></br>
            <div className="row text-center">
              <div className="col">
                {" "}
                <ButtonComponent
                  answer={this.state.answers[0]}
                  check_answer={this.check_answer.bind(this)}
                />
              </div>
              <div className="col">
                {" "}
                <ButtonComponent
                  answer={this.state.answers[1]}
                  check_answer={this.check_answer.bind(this)}
                />
              </div>
              <div className="col">
                {" "}
                <ButtonComponent
                  answer={this.state.answers[2]}
                  check_answer={this.check_answer.bind(this)}
                />
              </div>
              <div className="col">
                {" "}
                <ButtonComponent
                  answer={this.state.answers[3]}
                  check_answer={this.check_answer.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const home = {
  padding: "20% 20% 20% 20%"
};

export default App;
