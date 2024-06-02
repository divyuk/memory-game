export interface Card {
  src: string;
  matched: boolean;
}

export interface CardWithId extends Card {
  id: number;
}

export interface ISingleCard {
  card: CardWithId;
  handleChoice: (card: CardWithId) => void;
}
