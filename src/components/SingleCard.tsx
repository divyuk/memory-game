import React from "react";
import { CardWithId, ICardId } from "../models/cardArrayModel";

const SingleCard: React.FC<ICardId> = ({ cards }) => {
  return (
    <div>
      {cards.map((card: CardWithId) => (
        <div className="card" key={card.id}>
          <div>
            <img src={card.src} alt="card-front" className="front" />
            <img src="/img/cover.png" alt="card-back" className="back" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
