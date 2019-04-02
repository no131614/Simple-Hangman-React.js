import React, { Component } from "react";
import Card from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Typography from "@material-ui/core/Typography";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import Hangman from "./components/Hangman";
import Button from "@material-ui/core/Button";
import * as ConstCollection from "./constants/file";
import "./App.css";

const words = ConstCollection.WORD_LIBRARY

const INITIAL_STATE = {
  guesses: [],
  remainingLetters: [],
  letters: [],
  lifes: 7,
  gameOver: false
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentWillMount = () => {
    var randomIndex = this.getRandomWordIndex();
    this.setState({
      remainingLetters: [...words[randomIndex]],
      letters: [...words[randomIndex]]
    });
  };

  handleReset = () => {
    var randomIndex = this.getRandomWordIndex();
    this.setState({
      ...INITIAL_STATE,
      guesses: [],
      remainingLetters: [...words[randomIndex]],
      letters: [...words[randomIndex]]
    });
  };

  getRandomWordIndex = () => {
    return Math.floor(Math.random() * words.length);
  };

  handleKeyPress = letter => {
    let gList = this.state.guesses;
    gList.push(letter);
    this.setState({ guesses: gList });

    let rList = this.state.remainingLetters;

    if (rList.includes(letter)) {
      while (rList.includes(letter)) {
        rList.splice(rList.indexOf(letter), 1);
      }
      this.setState({ remainingLetters: rList });
      if (this.state.remainingLetters.length === 0) {
        // Win the Game
        this.setState({ gameOver: true, lifes: "win" });
      }
    } else {
      this.setState({ lifes: this.state.lifes - 1 });

      if (this.state.lifes === 0) {
        // Lose the Game
        this.setState({ gameOver: true, lifes: "lose" });
      }
    }
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Simple React JS Hangman Game" showMenuIconButton={false} />

            <Card className="CardBorder">
              <Typography variant="h2" gutterBottom>
                The Hangman Game
              </Typography>
              <Hangman lifes={this.state.lifes} />

              {!this.state.gameOver && (
                <Typography variant="h4" gutterBottom>
                  Guess The Word!!
                </Typography>
              )}

              {this.state.gameOver && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className="Keyboard"
                    onClick={() => {
                      this.handleReset();
                    }}
                  >
                    Try Again!
                  </Button>
                </div>
              )}

              <Word
                remainingLetters={this.state.remainingLetters}
                letters={this.state.letters}
                gameOverStatus={this.state.gameOver}
              />
            </Card>
            <br />
            <Card className="CardBorder">
              <Keyboard
                guesses={this.state.guesses}
                onClick={this.handleKeyPress}
                gameOverStatus={this.state.gameOver}
              />
            </Card>
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}