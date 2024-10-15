import React, { useState } from 'react';

import About from './AboutPage/About';
import CATEGORIES from '../Constants/Categories'
import './WelcomePage.css';

function WelcomePage({ onStart, category, numberQuestions, handleChange }) {
  const [aboutVisible, setAboutVisible] = useState(false);

  function handleAboutSwitch() {
    setAboutVisible(!aboutVisible);
  }

  if(aboutVisible) {
    return <About  handleAboutSwitch={handleAboutSwitch}/>
  }

  return (
    <>
      <div className="header">
        <nav className="header-navbar">
          <ul className="header-navbar-list">
            <li className='header-navbar-list-link' onClick={handleAboutSwitch}>About</li>
            <li className='header-navbar-list-link'>Contact</li>
            <li className='header-navbar-list-link'>FAQ</li>
          </ul>
        </nav>
      </div>
      <div className="content-container">
        <h1 className="welcome-heading">Welcome to the Trivia Quiz!</h1>
        <p className="welcome-text">Test your knowledge across various topics. Are you ready to begin?</p>
        <button className="welcome-button" onClick={onStart}>Start Quiz</button>
      </div>
      <div className='select-category'>
        <h2 className="category-heading">Select a Category</h2>
        <select className="category-select" name='category' value={category} onChange={handleChange}>
          <option value="">Select a Category</option>
          {Object.entries(CATEGORIES).map(([key, category]) => (
            <option key={key}>{category}</option>
          ))}
        </select>
      </div>
      <div className="selectNumberOfQuestions">
        <h2 className="selectNumberOfQuestions-heading">Select Number of Questions</h2>
        <input
          name='inputNumber'
          type="number"
          className="selectNumberOfQuestions-input"
          min="1"
          max="50"
          value={numberQuestions}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default WelcomePage;
