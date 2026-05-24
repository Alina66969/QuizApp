type Props = {
  total: number;
  wrong: number;
  correct: number;
  onRestart: () => void;
};

const Result = ({ total, wrong, correct, onRestart }: Props) => {
  const remaining = total - (correct + wrong);

  return (
    <div className="result-box">
      <h1>Your Results</h1>
      <p>Questions Asked: {total}</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {wrong}</p>
      <p>Remaining: {remaining}</p>
      <h2>THANK YOU</h2>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
