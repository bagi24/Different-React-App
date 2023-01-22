import React, { useContext } from 'react';
import { QuizContext } from '../QuizHelpers/Context';

export default function MainManu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className='Menu'>
      <button
        onClick={() => {
          setGameState('quiz');
        }}>
        Start Quiz
      </button>
    </div>
  );
}
