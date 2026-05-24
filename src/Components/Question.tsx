import { useState } from 'react';

type QuestionData = {
  question: string;
  options: string[];
  answer: string;
};

type Props = {
  questionData: QuestionData;
  onAnswer: (selectedOption: string) => void;
};

const Question = ({ questionData, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState<boolean>(false);

  const handleClick = (option: string) => {
    if (locked) return;
    setSelected(option);
    setLocked(true);

    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setLocked(false);
    }, 500);
  };

  const getClass = (option: string) => {
    if (!locked) return '';
    if (option === questionData.answer) return 'correct';
    if (option === selected && option !== questionData.answer) return 'wrong';
    return '';
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
