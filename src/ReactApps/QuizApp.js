import './QuizApp.css';
import React, { useState, useContext } from 'react';
import MainManu from './QuizComponents/MainManu.js';
import Quiz from './QuizComponents/Quiz.js';
import EndScreen from './QuizComponents/EndScreen.js';
import { QuizContext } from './QuizHelpers/Context.js';

const QuizApp = () => {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1 className='h1'> Quiz App </h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === 'menu' && <MainManu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
};

export default QuizApp;
