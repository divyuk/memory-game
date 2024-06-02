import React from "react";
import { ISingleCard } from "../models/cardArrayModel";

const SingleCard: React.FC<ISingleCard> = ({ card }) => {
  return (
    <div>
      <div>
        <img src={card.src} alt="card-front" className="front" />
        <img src="/img/cover.png" alt="card-back" className="back" />
      </div>
    </div>
  );
};

export default SingleCard;
