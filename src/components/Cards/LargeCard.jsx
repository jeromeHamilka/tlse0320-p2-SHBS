import React from 'react';
import PropTypes from 'prop-types';
import './LargeCard.css';

const LargeCard = props => {
  const { name, image, fullName, alignment, height, weight } = props;
  return (
    <div className="collection-big-card">
      <img src={image} alt={name} />
      <div>
        <p className="bigger-P-Li">{name}</p>
        <ul>
          {fullName && fullName !== name && (
            <li className="bigger-P-Li">
              <em>{fullName}</em>
            </li>
          )}
          {height !== '0 cm' && height && <li className="bigger-P-Li">{height}</li>}
          {weight !== '0 kg' && weight && <li className="bigger-P-Li">{weight}</li>}
          <li className="bigger-P-Li">{`Alignment: ${alignment}`}</li>
        </ul>
      </div>
    </div>
  );
};

LargeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  combat: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired
};

export default LargeCard;
