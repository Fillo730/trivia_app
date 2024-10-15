import React from 'react';
import './QuestionCard.css'

function QuestionCard({ question, onAnswer, category, goBackWelcome}) {
  const { text } = question.question;
  const answers = [...question.incorrectAnswers, question.correctAnswer].sort(() => Math.random() - 0.5);


  return (
    <div className='questionCard'>
      <div className='questionCard-heading'>
        <h2 className='questionCard-heading-categorySelected'>Category Selected: {category}</h2>
      </div>
      <div className="questionCard-question">
        <h3 className='questionCard-question-heading'>{text}</h3>
        <div className="questionCard-question-buttons">
          {answers.map((answer, index) => (
            <button className="questionCard-divButtons-button" key={index} onClick={() => onAnswer(answer)}>
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className='questionCard-button'>
        <button className="questionCard-button-goBack" onClick={goBackWelcome}>GoBack</button>
      </div>
    </div>
  );
}

export default QuestionCard;
