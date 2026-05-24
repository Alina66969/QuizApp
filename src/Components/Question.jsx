import { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const handleClick = (option) => {
    if (locked) return;
    setSelected(option);
    setLocked(true);

    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setLocked(false);
    }, 500);
  };

  const getClass = (option) => {
    if (!locked) return "";
    if (option === questionData.answer) return "correct";
    if (option === selected && option !== questionData.answer) return "wrong";
    return "";
  };

  return (
    <div className="question-box">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleClick(opt)}
            disabled={locked}
            className={getClass(opt)}
          >
            {index + 1}. {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
