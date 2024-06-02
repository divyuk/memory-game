export interface Card {
  src: string;
}

export interface CardWithId extends Card {
  id: number;
}

export interface ISingleCard {
  card: CardWithId;
}
