import React, { useState, useEffect } from 'react';
import './index.css';
import perguntas from './perguntasQuiz'; 

function QuizTP() {
  const [screen, setScreen] = useState('start');
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    let timer;
    if (screen === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      nextQuestion();
    }
    return () => clearInterval(timer);
  }, [timeLeft, screen]);

  const startQuiz = () => {
    setScreen('quiz');
    setTimeLeft(10);
  };

  const restartQuiz = () => {
    setScreen('start');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(10);
    setSelectedOption(null);
  };

  const checkAnswer = (index) => {
    if (index === perguntas[currentQuestionIndex].correctIndex) {
      setScore(score + 1);
    }
    setSelectedOption(index);
    setTimeout(nextQuestion, 1000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < perguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10);
      setSelectedOption(null);
    } else {
      setScreen('end');
    }
  };

  return (
    <div id="quiz-container">
      {screen === 'start' && (
        <div id="start-screen">
          <h1>Bem-vindo ao Quiz</h1>
          <button onClick={startQuiz}>Iniciar</button>
        </div>
      )}
      {screen === 'quiz' && (
        <div>
          <div id="timer-container">
            Tempo restante: <span id="timer">{timeLeft}</span> segundos
          </div>
          <div id="question-container">
            <h2 id="question">{perguntas[currentQuestionIndex].question}</h2>
            <div id="options-container">
              {perguntas[currentQuestionIndex].options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => checkAnswer(index)}
                  className={
                    selectedOption !== null
                      ? index === perguntas[currentQuestionIndex].correctIndex
                        ? 'correct'
                        : selectedOption === index
                        ? 'wrong'
                        : ''
                      : ''
                  }
                >
                  <img src={option} alt={`Option ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {screen === 'end' && (
        <div id="end-screen">
          <h1>Parabéns! Você concluiu o Quiz!</h1>
          <p id="final-score">Sua pontuação: {score}</p>
          <button onClick={restartQuiz}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default QuizTP;
