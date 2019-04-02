import Button from "@material-ui/core/Button";
import React from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KeyBoard = props => (
  <div>
    {letters.map(letter => (
      <Button
        variant="contained"
        size="small"
        color="primary"
        disabled={props.guesses.includes(letter) || props.gameOverStatus ? true : false}
        onClick={() => {
          props.onClick(letter);
        }}
      >
        {letter}
      </Button>
    ))}
  </div>
);

export default KeyBoard;
