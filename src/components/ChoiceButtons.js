import React from "react";

export default function ChoiceButtons(props) {
  return (
    <div className="container d-flex btn-item">
      <button
        className="btn btn-outline-light"
        onClick={() => props.onPlayerChoose("rock")}
      >
        Rock
      </button>
      <button
        className="btn btn-outline-light"
        onClick={() => props.onPlayerChoose("paper")}
      >
        Paper
      </button>
      <button
        className="btn btn-outline-light"
        onClick={() => props.onPlayerChoose("scissors")}
      >
        Scissors
      </button>
    </div>
  );
}
