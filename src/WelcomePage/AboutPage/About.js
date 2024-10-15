import React from 'react';
import './About.css';

function About({handleAboutSwitch}) {
    return (
        <div className="about-container">
            <h1 className="about-heading">About the Trivia Quiz</h1>
            <p className="about-description">
                Welcome to the Trivia Quiz! This application is designed to test your knowledge across various topics, 
                ranging from history and science to arts and culture. Whether you are a trivia enthusiast or just looking 
                to learn something new, this quiz is for you!
            </p>
            <h2 className="about-subheading">How It Works</h2>
            <p className="about-description">
                The trivia quiz consists of a series of questions, each with multiple-choice answers. 
                You can select your preferred category and the number of questions you'd like to answer.
                A the end you fill find a brief resume of your answers and your score. Have fun :D.
            </p>
            <h2 className="about-subheading">Our Mission</h2>
            <p className="about-description">
                Our mission is to create an engaging and educational experience for users of all ages. 
                We aim to make learning fun and accessible through interactive quizzes and challenges.
            </p>
            <h2 className="about-subheading">Contact Us</h2>
            <p className="about-description">
                If you have any questions, feedback, or suggestions, please feel free to reach out to us at 
                <a href="mailto:contact@triviaquiz.com" className="about-email"> contact@triviaquiz.com</a>.
            </p>
            <p className='about-button'>
                <button onClick={handleAboutSwitch}>GoBack</button>
            </p>
        </div>
    );
}

export default About;
