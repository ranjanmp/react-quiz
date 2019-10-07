import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/button_component";
import ValidationCountComponent from "./components/validation_count_component";

class App extends React.Component {
  state = { correct_count: 0, incorrect_count: 0 };
  render() {
    return (
      <div className="container-fluid">
        <div className="row mx-auto" style={home}>
          <div className="col ">
            <div className="row">
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
            <ButtonComponent />
          </div>
        </div>
      </div>
    );
  }
}

const home = {};

export default App;
