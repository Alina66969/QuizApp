import { useState } from 'react';
import Question from './Components/Question';
import Result from './Components/Result';
import Quiz from './Data/Quiz';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = Quiz[currentIndex];

    if (selectedOption === currentQuestion.answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    if (currentIndex + 1 < Quiz.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setFinished(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {!finished ? (
        <Question questionData={Quiz[currentIndex]} onAnswer={handleAnswer} />
      ) : (
        <Result total={Quiz.length} correct={correctCount} wrong={wrongCount} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
