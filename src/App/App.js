import React, { useState} from 'react';
import axios from 'axios';

import QuestionCard from '../QuestionCard/QuestionCard';
import WelcomePage from '../WelcomePage/WelcomePage';
import History from '../History/History';
import { extractRandomCategory } from '../Constants/Categories';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [category, setCategory] = useState(""); 
  const [numberQuestions, setNumberQuestions] = useState(10); 
  const [historyCounter, setHistoryCounter] = useState(1);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const fetchTriviaData = async () => {
    try {
      console.log("Selected category: " + category);
      console.log("Number of questions: " + numberQuestions);
      const response = await axios.get("https://the-trivia-api.com/v2/questions", {
        params: {
          categories: category==="random" ? (extractRandomCategory()) : category,
          limit: numberQuestions,
        },
      });
      console.log(response.data);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching trivia data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setCategory(value);
    } else if (name === "inputNumber") {
      setNumberQuestions(parseInt(value, 10));
    }
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      setHistory((prevHistory) =>
        prevHistory + `${historyCounter}° question: ${currentQuestion.question.text}\nYour answer "${answer}" is correct\n\n`
      );
    } else {
      setHistory((prevHistory) =>
        prevHistory + `${historyCounter}° question: ${currentQuestion.question.text}\nYour answer "${answer}" is not correct.\nThe correct answer is: "${currentQuestion.correctAnswer}"\n\n`
      );
    }

    setHistoryCounter(historyCounter + 1);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setShowWelcome(false);
    fetchTriviaData();
  };

  const goBackWelcome = () => {
    setShowWelcome(true);
  };

  if (showWelcome) {
    return <WelcomePage onStart={startQuiz} category={category} numberQuestions={numberQuestions} handleChange={handleChange} />;
  }

  if (showResult) {
    return (
      <History score={score} totalQuestions={questions.length} history={history} />
    );
  }

  return (
    <div className="app-question">
      {questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          category={category}
          goBackWelcome={goBackWelcome}
        />
      )}
    </div>
  );
}

export default App;
