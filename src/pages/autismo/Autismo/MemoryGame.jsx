import { useState, useEffect } from 'react';
import styles from './MemoryGame.module.css';
import Clebinho from "../../../assets/img-autismo/Clebinho.jpg";
import Vanessa from '../../../assets/img-autismo/Vanessa.jpg';
import LUCA from '../../../assets/img-autismo/LUCA.jpg';
import Leo from '../../../assets/img-autismo/leo.jpg';
import Dona from '../../../assets/img-autismo/Dona.JPG';
import Aghata from '../../../assets/img-autismo/Aghata.JPG';
import Francis from '../../../assets/img-autismo/Francis.jpg';
import Wilson from '../../../assets/img-autismo/Wilson.jpg';
import Camila from '../../../assets/img-autismo/Camila.jpg';
import Calmigo from '../../../assets/img-autismo/calmigo.jpg';

// Mapeamento dos personagens para as imagens
const imageMap = {
  Clebinho,
  Vanessa,
  LUCA,
  Leo,
  Dona,
  Aghata,
  Francis,
  Wilson,
  Camila,
  Calmigo,
};

// Lista de personagens
const characters = [
  "Clebinho",
  "Vanessa",
  "LUCA",
  "Leo",
  "Dona",
  "Aghata",
  "Francis",
  "Wilson",
  "Camila",
  "Calmigo",
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const player = localStorage.getItem('player');

  useEffect(() => {
    shuffleCards();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []); 

  useEffect(() => {
    if (time > 0 && cards.length > 0 && cards.every(card => card.matched)) {
      clearInterval(intervalId);
      setTimeout(() => {
        alert(`Parabéns ${player}, você completou o jogo em ${time} segundos.`);
        shuffleCards(); // Reinicia o jogo após o alerta
      }, 100);
    }
  }, [cards, time]);

  const startTimer = () => {
    // Limpa o intervalo existente se houver
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Inicia um novo intervalo
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    setIntervalId(id);
  };

  const shuffleCards = () => {
    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters
      .sort(() => Math.random() - 0.5)
      .map((character) => ({
        character,
        id: Math.random(),
        matched: false,
      }));

    setCards(shuffledArray);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTime(0); // Reseta o tempo quando um novo jogo é iniciado
    startTimer(); // Reinicia o temporizador
  };

  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.character === choiceTwo.character) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.character === choiceOne.character) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const createCard = (card, index) => {
    const isFlipped =
      card === choiceOne || card === choiceTwo || card.matched;
    return (
      <div
        key={index}
        className={`${styles.card}`}
        data-character={card.character}
        onClick={() => handleChoice(card)}
      >
        <div
          className={`${styles.face} ${
            isFlipped ? styles.revealCard : styles.back
          }`}
          style={{
            backgroundImage: `url(${
              isFlipped ? imageMap[card.character] : '../../src/assets/img-autismo/robert-bosch.jpg'
            })`,
          }}
        ></div>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.player}>{player}</span>
        <span>
          Tempo: <span className={styles.timer}>{time}</span>
        </span>
      </header>
      <button onClick={shuffleCards} style={styles.button}>Novo Jogo</button>
      <div className={styles.grid}>
        {cards.map((card, index) => createCard(card, index))}
      </div>
    </main>
  );
};

export default MemoryGame;
