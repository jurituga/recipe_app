import React from 'react';
import { Card, Card2, Card3 } from './Card';
import background from '../img/background.jpg';
import { useState } from 'react';
import Popup from '../components/Popup';


function KartaFig () {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  }

  const handlePopupClose = () => {
    setSelectedCard(null);
    setShowPopup(false);
  }

  return (
    <div className="card-container bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="card-wrapper">
        <div className="cards" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="card card-one" style={{ width: '50%', cursor: 'pointer' }} onClick={() => handleCardClick('Card 1')}><Card /></div>
          <div className="card card-two" style={{ width: '50%', cursor: 'pointer' }} onClick={() => handleCardClick('Card 2')}><Card2 /></div>
          <div className="card card-two" style={{ width: '50%', cursor: 'pointer' }} onClick={() => handleCardClick('Card 2')}><Card3 /></div>
        </div>
      </div>
      {showPopup && (
        <Popup card={selectedCard} onClose={handlePopupClose} />
      )}
    </div>
  );
}

export default KartaFig;

