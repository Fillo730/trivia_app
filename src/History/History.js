// History.js
import React from 'react';
import './History.css'; 

function History({ score, totalQuestions, history }) {
  const renderHistory = history.split('\n\n').map((entry, index) => {
    
    const isCorrect = entry.includes('is correct');
    const isIncorrect = entry.includes('is not correct');

    return (
      <div key={index} className={`history-entry ${isCorrect ? 'correct' : isIncorrect ? 'incorrect' : ''}`}>
        {entry.split('\n').map((line, lineIndex) => (
          <div key={lineIndex}>
            {}
            {lineIndex === 0 ? <strong>{line}</strong> : line}
          </div>
        ))}
        {}
        <div className="history-separator" />
      </div>
    );
  });

  return (
    <div className="app-score">
      <h2 className='app-score-heading'>Your Score: {score}/{totalQuestions}</h2>
      <div className='app-score-history'>{renderHistory}</div>
    </div>
  );
}

export default History;
