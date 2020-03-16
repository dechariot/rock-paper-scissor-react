import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'
const choices = {
  rock: "https://img.icons8.com/color/2x/hand-rock.png",
  paper: "https://img.icons8.com/color/2x/hand.png",
  scissors: "https://img.icons8.com/color/2x/hand-scissors.png"
}

function App() {
  return (
    <div className="App">
      <h1 className="white ">The Result is ...</h1>
      <div className="Flex">
      <ChoiceCard name="You" color="white" background="border-white" img={choices.paper} winner={false}/>
      <ChoiceCard name="Computer" color="white" background="border-white" img={choices.paper} winner={false}/>
      <ChoiceCard name="Sang" color="white" background="border-white" img={choices.scissors} winner={true} />
    </div>
    </div>
  );
}

export default App;
