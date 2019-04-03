import React from "react";

const Word = props => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {props.letters.map((letter, i) => (
      <div
        key={i}
        style={{
          margin: "5px",
          size: "40px",
        }}
      >
        <span
          style={{ fontSize: 45 }}
        >
          {!props.remainingLetters.includes(letter) || props.gameOverStatus  ? letter : "__"}
        </span>
      </div>
    ))}
  </div>
);

export default Word;
