import Options from "./components/Options";
import Questions from "./components/Questions";
import "./styles.css";
import QuestionData from "./QuestionData";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = (idx) => {
    if (index === QuestionData.length) return;
    if (QuestionData[index].options[idx].isCorrect) {
      alert("you are right");
      setScore(score + 1);
    }
    if (!QuestionData[index].options[idx].isCorrect) {
      alert("opps! better luck for next time");
    }

    if (index === QuestionData.length - 1) {
      alert("your score:" + score);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <div className="App">
      <div className="score">
        <h1>score:{score}</h1>
      </div>

      <div className="container">
        <Questions questions={QuestionData[index].question} />
        <Options
          options={QuestionData[index].options}
          nextQuestion={nextQuestion}
        />
        <button onClick={nextQuestion}> Next </button>
      </div>
    </div>
  );
}
