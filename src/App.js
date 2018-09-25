import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./Char/CharComponent";

class App extends Component {
  state = {
    inputText: ""
  };

  inputTextChangeHandler = ev => {
    this.setState({ inputText: ev.target.value });
  };

  deleteCharHandler = index => {
    let input = this.state.inputText.split("");
    input.splice(index, 1);
    this.setState({ inputText: input.join("") });
  };

  render() {
    return (
      <div className="App">
        <input style={{margin: '10px'}}
          type="text"
          onChange={this.inputTextChangeHandler}
          value={this.state.inputText}
        />

        <ValidationComponent textLength={this.state.inputText.length} />
        {
          <ol>
            {this.state.inputText.split("").map((ch, i) => {
              return (
                <CharComponent
                  key={i}
                  char={ch}
                  click={() => this.deleteCharHandler(i)}
                />
              );
            })}
          </ol>
        }
      </div>
    );
  }
}

export default App;
