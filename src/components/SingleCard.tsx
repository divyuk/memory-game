import React from "react";
import { ISingleCard } from "../models/cardArrayModel";
import "./SingleCard.css";
const SingleCard: React.FC<ISingleCard> = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div>
      <div>
        <img
          src={card.src}
          alt="card-front"
          className="front"
          onClick={handleClick}
        />
        <img src="/img/cover.png" alt="card-back" className="back" />
      </div>
    </div>
  );
};

export default SingleCard;
