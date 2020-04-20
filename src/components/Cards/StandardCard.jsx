import React from 'react';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = () => {
  return (
    <div className="container-card-text">
      <img className="standard-card" src={cardskeleton} alt="border of the card" />
      <div className="attack">
        <p>63</p>
      </div>
      <div className="life">
        <p>92</p>
      </div>
    </div>
  );
};

export default StandardCard;
