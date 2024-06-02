import React from "react";
import { ISingleCard } from "../models/cardArrayModel";
import "./SingleCard.css";
const SingleCard: React.FC<ISingleCard> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };
  return (
    <div>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card-front" className="front" />
        <img
          src="/img/cover.png"
          alt="card-back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
