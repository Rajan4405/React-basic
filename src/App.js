import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponet/Validation';
import Char from './Char/Char';
class App extends Component {
  state = {
    userInput: '',
  };
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({ userInput: updateText });
  };

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div>
        <ol>
          <li>
            Create an input field(in App Component) with a change listener which
            outputs the length of the entered text below(e.g. in a paragraph
          </li>
          <li>
            Create new Component(ValidationComponent) which recive the text
            length as prop
          </li>
          <li>
            Inside the ValidationComponent either output "Text long short" or
            "Text long enogh" depending on the next length(e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another Component(= CharComponent) and style it as an inlinr
            box(display:inline-block, padding:16px, text-align: center,
            margin:16px, border:1px solid black)
          </li>
          <li>
            Render a list of CharComponent where each CharComponent recieves a
            different letter of the entered text(in the initial input field) as
            prop
          </li>
          <li>
            When you click a CharComponent, it should be removed entered text
          </li>
        </ol>
        <p>Hint: keep in mind JavaScript are basically arrays! </p>
        <hr />
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>

        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
