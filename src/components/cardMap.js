import React from "react";

const CardMap = ({ deck, onCardClick }) => {

    const handleCardClick = (card) => {
        onCardClick(card);
    }

    return (
        <div id='deckHolder'>
            {deck.map((card, index) => {
                return <div className="cardHolder"><img src={card} alt={`Card ${index}`} key={index} onClick={() => handleCardClick(card)}className="cardPics" /></div>
            })}
        </div>
    );
};

export default CardMap;