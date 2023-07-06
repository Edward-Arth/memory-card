import React, { useState } from "react";
import CardMap from "./components/cardMap";
import apollyon from "./images/apollyon.webp";
import azazel from "./images/azazel.jpg";
import cain from './images/cain.webp';
import eve from "./images/eve.webp"
import laz from "./images/laz.webp"
import lilith from "./images/lilith.webp"
import samson from "./images/samson.webp"
import keeper from "./images/keeper.jpg";
import forgotten from "./images/forgotten.png";
import isaac from "./images/isaac.png";
import jacob from "./images/J&E.webp";
import magdalene from "./images/magdalene.png";

export default function App () {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const deck = [cain, apollyon, azazel, eve, laz, lilith, samson, keeper, forgotten, isaac, jacob, magdalene];

  //This is called the Fisher-Yates algorithm; I found it while reading about shuffling arrays.
  const deckShuffle = (deckOfCards) => {
    for (let i = deckOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
    };
    return deckOfCards;
  };

  const successfulClick = (card) => {
    setScore(score + 1);
    setClickedCards(clickedCards.concat(card))
    deckShuffle(deck);
  };

  const unsuccessfulClick = () => {
    if (score > highScore) {
      setHighScore(score);
    };
    setScore(score - score);
    setClickedCards([]);
    deckShuffle(deck);
  };

  const handleCardClick = (card) => {
    const clickedCard = card;
    clickedCards.includes(clickedCard) ? unsuccessfulClick() : successfulClick(card);
  };

  return (
    <div id="oldestCon">
      <div id="headerCon">
        <div id="titleDiv">Memory Card</div>
        <div id="instructions">Click a card to increase your score, but don't click the same card twice</div>
      </div>
      <div id="deckDisplayCon"><CardMap deck={deckShuffle(deck)} onCardClick={handleCardClick} /></div>
      <div id="scoreInfo"><div>Current score: {score}</div> <div>Best score: {highScore}</div></div>
    </div>
  );
};