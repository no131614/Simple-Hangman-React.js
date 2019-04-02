import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const styles = theme => ({
  buttonStyling: {
    margin:"5px"
  }
});

const KeyBoard = props => {
  const { classes } = props;

  return (
    <div>
      {letters.map(letter => (
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled={
            props.guesses.includes(letter) || props.gameOverStatus
              ? true
              : false
          }
          onClick={() => {
            props.onClick(letter);
          }}
          className={classes.buttonStyling}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default withStyles(styles)(KeyBoard);
