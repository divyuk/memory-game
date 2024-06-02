import "./App.css";

import React, { useEffect, useState } from "react";
import cardArray from "./const/cardArray";
import { CardWithId } from "./models/cardArrayModel";
import SingleCard from "./components/SingleCard";

const App: React.FC = () => {
  const [cards, setCards] = useState<CardWithId[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<CardWithId | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardWithId | null>(null);
  const [disabled, setDisabled] = useState(false);

  // Use useEffect to check for matches after state updates
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) return { ...card, matched: true };
            else return card;
          });
        });
        resetTurn();
      } else setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  // Shuffle Card
  const shuffleCard = () => {
    const shuffledCards = [...cardArray, ...cardArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Start the game with shuffling the card
  useEffect(() => shuffleCard(), []);

  // Handle the choice
  const handleChoice = (card: CardWithId) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    //! Remember you cant do match over here as the state updates are stale and wont happen instantly, the below code however will run
    // match();
  };

  // Reset the choices once we have two choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>
      <div className="card-grid">
        {cards.map((card: CardWithId) => (
          <div className="card" key={card.id}>
            <SingleCard
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
};

export default App;
