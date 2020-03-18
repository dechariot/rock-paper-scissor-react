import React, { useState } from "react";
import "./App.css";

import ChoiceCard from "./components/ChoiceCard";
import ChoiceButtons from "./components/ChoiceButtons";

const CHOICES = {
  scissors: {
    name: "scissors",
    url: "https://img.icons8.com/color/48/000000/hand-scissors.png"
  },
  paper: {
    name: "paper",
    url: "https://img.icons8.com/color/48/000000/hand.png"
  },
  rock: {
    name: "rock",
    url:
      "https://img.icons8.com/color/48/000000/hand-rock.png"
  }
};

const getRandomChoice = () => {
  var keys = Object.keys(CHOICES);
  return CHOICES[keys[(keys.length * Math.random()) << 0]];
};

const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

function App() {
  const [computerChoice, setComputerChoice] = useState(getRandomChoice());
  const [playerChoice, setPlayerChoice] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  };

  return (
    <div className="App">
      <div className="container-fluid board">
        <div className="container-fluid title">
            Rock Paper Scissors Game
        </div>
        <div className="container d-flex">
          {/* CPU */}
          <div className="container mini-board m-0">
            <ChoiceCard
              title="Computer"
              imgURL={computerChoice.url}
              previousWinner={previousWinner}
            />
          </div>

          {/* Player */}
          <div className="container mini-board">
            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />
          </div>
        </div>
        {/* Choices Btn */}
        <div className="container button">
          <h1>{prompt}</h1>
          <ChoiceButtons onPlayerChoose={onPlayerChoose} />
        </div>


        <div className="container history">
          <h3>History</h3>
          <ul>
            {gameHistory.map(result => {
              return <li>{result}</li>;
            })}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
