import "./App.css";

import React, { useState } from "react";
import cardArray from "./const/cardArray";
import { CardWithId } from "./models/cardArrayModel";
import SingleCard from "./components/SingleCard";

const App: React.FC = () => {
  const [cards, setCards] = useState<CardWithId[]>([]);
  const [turns, setTurns] = useState<number>(0);

  // Shuffle Card
  const shuffleCard = () => {
    const shuffledCards = [...cardArray, ...cardArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>
      <div className="card-grid">
        <SingleCard cards={cards} />
      </div>
    </div>
  );
};

export default App;
