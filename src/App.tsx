import "./App.css";

import React, { useState } from "react";
import cardArray from "./const/cardArray";
import { Card } from "./models/cardArrayModel";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
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
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img src={card.src} alt="card-front" className="front" />
              <img src="/img/cover.png" alt="card-back" className="back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
