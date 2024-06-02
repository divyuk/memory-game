# Magic Card Game

A magic card game built on Reactjs

## Points to remember

We have const cardArray to point to the images.
The sort method uses the comparator function to determine the order of elements.
For each pair of elements being compared, the comparator returns a positive, negative, or zero value:
Negative value: The first element comes before the second.
Positive value: The first element comes after the second.
Zero: The order of the elements remains unchanged.

Suppose we have created two choices but we can do check instantly as the state updates are scheduled

```
  // Match Equal or not
  const match = () => {
    if (choiceOne !== null && choiceTwo !== null) {
      if (choiceOne.src === choiceTwo.src) {
        console.log(choiceOne.src);
        resetTurn();
        return;
      }
    }
    console.log("in match ");
  };

  // Handle the choice
  const handleChoice = (card: CardWithId) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    //! Remember you cant do match over here as the state updates are stale and wont happen instantly, the below code however will run
    match();
  };
```

To address this, you can use the useEffect hook to run the match function whenever choiceOne or choiceTwo is updated. This ensures that match runs only after the state has been updated.

```
// Use useEffect to check for matches after state updates
useEffect(() => {
  if (choiceOne && choiceTwo) {
    match();
  }
}, [choiceOne, choiceTwo]);
```

Runs the match function whenever choiceOne or choiceTwo changes.
This ensures that match is called only after the state has been updated.

---

There are three scenrios when we want to flip the card

1. When the user selected the card, flip it.
2. Let the card stayed flipped when the card is matched.

```
flipped = {card === choiceOne || card === choiceTwo || card.matched}
```

CSS property for the flipping
card class is relative so when the front class is made absolute, its original space is
eaten out and the front shows over the back.
Transform made it rotate y

```
/* Front of the card the picture */
.card .front {
  position: absolute;
  transform: rotateY(90deg);
}

.flipped .front {
  transform: rotateY(0deg);
}
```
