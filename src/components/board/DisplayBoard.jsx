import React from 'react';
import PropTypes from 'prop-types';
import DisplayTurnIndication from './DisplayTurnIndication';
import StandardCard from '../Cards/StandardCard';
import ModalCard from './ModalCard';
import './DisplayBoard.css';

const DisplayBoard = props => {
  const {
    opponentDeck,
    playerDeck,
    handleHover,
    handleClick,
    clearIndex,
    life,
    attack,
    opponentIsWating,
    indexToDisplay,
    playerIsWating,
    selectedCard,
    damages,
    opponentTurn
  } = props;

  return (
    <section className="darkcity-bg flex-row">
      <DisplayTurnIndication
        life={life}
        playerIsWating={playerIsWating}
        opponentIsWating={opponentIsWating}
      />
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            return (
              <div className="flex-row">
                <ModalCard
                  indexToDisplay={indexToDisplay}
                  character={character}
                  id={i + 3}
                  background=" bg-opponent"
                />
                <StandardCard
                  handleHover={handleHover}
                  handleClick={handleClick}
                  clearIndex={clearIndex}
                  combat={attack[i + 3]}
                  durability={life[i + 3]}
                  image={character.images.md}
                  index={i + 3}
                  key={character.id}
                  damages={damages[1]}
                  cardClass={
                    life[i + 3] > 0
                      ? `container-card-text ${
                          damages[1][1] === i + 3 && !damages[2]
                            ? ' isAttacking'
                            : ' isNotAttacking'
                        }
                      ${damages[1][1] === i + 3 && damages[2] ? ' isShaking' : ''}`
                      : 'container-card-text dead'
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="board-cards-bottom flex-row">
          {playerDeck.map((character, i) => {
            return (
              <div>
                <ModalCard
                  indexToDisplay={indexToDisplay}
                  character={character}
                  id={i}
                  background=" bg-player"
                />
                <StandardCard
                  handleHover={handleHover}
                  handleClick={handleClick}
                  clearIndex={clearIndex}
                  combat={attack[i]}
                  durability={life[i]}
                  image={character.images.md}
                  index={i}
                  key={character.id}
                  damages={damages[0]}
                  cardClass={
                    life[i] > 0
                      ? `container-card-text${
                          selectedCard === i || damages[0][1] === i
                            ? ' isAttacking'
                            : ' isNotAttacking'
                        }${damages[0][1] === i && opponentTurn ? ' isShaking' : ''}`
                      : 'container-card-text dead'
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="board-log-text flex-column">
        <h2>Combat log</h2>
        <div className="board-game-history" />
      </div>
    </section>
  );
};

DisplayBoard.propTypes = {
  opponentDeck: PropTypes.instanceOf(Array).isRequired,
  playerDeck: PropTypes.instanceOf(Array).isRequired,
  life: PropTypes.instanceOf(Array).isRequired,
  attack: PropTypes.instanceOf(Array).isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  clearIndex: PropTypes.func.isRequired,
  opponentIsWating: PropTypes.bool.isRequired,
  indexToDisplay: PropTypes.number,
  playerIsWating: PropTypes.bool.isRequired,
  selectedCard: PropTypes.number,
  damages: PropTypes.number,
  opponentTurn: PropTypes.bool.isRequired
};
export default DisplayBoard;
