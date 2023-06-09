import React, { useEffect, useState } from "react";
import "./styleMemoria.css";

const difficultyLevels = [
  { name: "Fácil", numberOfCards: 4 },
  { name: "Médio", numberOfCards: 10 },
  { name: "Difícil", numberOfCards: 20 },
];

const emojis = [
  "🍕", "🍔", "🍟", "🌭", "🥪", "🌮", "🌯", "🥙", "🍿", "🍩", "🍦", "🍪",
  "🍓", "🍌", "🍇", "🍉", "🍆", "🥑", "🌽", "🥕", "🥦", "🍗", "🥩", "🍖",
  "🍤", "🍣"
];

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const JogodaMemoria = () => {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [temporarySelectedCard, setTemporarySelectedCard] = useState(null);
  const [pairsFound, setPairsFound] = useState(0);
  const [currentDifficulty, setCurrentDifficulty] = useState(0);

  const level = difficultyLevels[currentDifficulty];
  const { numberOfCards } = level;

  useEffect(() => {
    const shuffledCards = emojis.slice(0, numberOfCards / 2).flatMap((emoji, index) => [
      { emoji, found: false, revealed: false, id: index * 2 },
      { emoji, found: false, revealed: false, id: index * 2 + 1 }
    ]);

    setCards(shuffle(shuffledCards));
  }, [numberOfCards]);

  const selectCard = (id) => {
    if (temporarySelectedCard !== null || selectedCards.length === 2) {
      return;
    }

    const selectedCard = cards.find((card) => card.id === id);

    if (selectedCard.found || selectedCard.revealed) {
      return;
    }

    if (selectedCards.length === 0) {
      setTemporarySelectedCard(selectedCard);

      setTimeout(() => {
        setTemporarySelectedCard(null);
        setSelectedCards([selectedCard]);
      }, 500);
    } else if (selectedCards.length === 1) {
      const secondSelectedCard = selectedCard;
      setTemporarySelectedCard(selectedCard);

      setTimeout(() => {
        setTemporarySelectedCard(null);
        setSelectedCards([...selectedCards, secondSelectedCard]);

        if (secondSelectedCard.emoji === selectedCards[0].emoji) {
          setPairsFound((pairsFound) => pairsFound + 1);

          if (pairsFound + 1 === numberOfCards / 2) {
            setGameOver(true);
          }

          const updatedCards = cards.map((card) => {
            if (card.id === selectedCard.id || card.id === selectedCards[0].id) {
              return { ...card, found: true };
            }
            return card;
          });

          setCards(updatedCards);
          setSelectedCards([]);
        } else {
          setTimeout(() => {
            setSelectedCards([]);
          }, 1000);
        }
      }, 1000);
    }
  };

  const changeDifficulty = () => {
    setGameOver(false);
    setPairsFound(0);
    setCurrentDifficulty((currentDifficulty + 1) % difficultyLevels.length);
  };

  return (
    <div className="containerMemory">
      <h2>Jogo da Memória</h2>
      <p>
        Nível de Dificuldade: <strong>{level.name}</strong>
      </p>
      {!gameOver && (
        <p>
          Você encontrou{" "}
          {pairsFound} {pairsFound === 1 ? "par" : "pares"} até agora.
        </p>
      )}
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.found ? "found" : ""}`}
            onClick={() => selectCard(card.id)}
          >
            {temporarySelectedCard === card || selectedCards.includes(card) || card.revealed ? (
              <span>{card.emoji}</span>
            ) : (
              <span>❓</span>
            )}
          </div>
        ))}
      </div>
      {gameOver && (
        <h3>Parabéns, você finalizou o jogo!</h3>
      )}
      <button className="changeDifficultyBtn" onClick={changeDifficulty}>
        Alterar Nível de Dificuldade
      </button>
    </div>
  );
};

export default JogodaMemoria;
