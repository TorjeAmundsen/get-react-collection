import { useState } from "react";

interface Props {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  setImgClass: React.Dispatch<React.SetStateAction<string>>;
  setPointsClass: React.Dispatch<React.SetStateAction<string>>;
}

function GeneratedNumbers({
  points,
  setPoints,
  setImgClass,
  setPointsClass,
}: Props) {
  const getRandomNumber = (min: number, max: number): number => {
    const x: number = Math.floor(min);
    const y: number = Math.floor(max);
    return Math.floor(Math.random() * (y - x + 1) + x);
  };
  const generateNewNumbers = () => {
    setLeftNumber(getRandomNumber(1, 10));
    setRightNumber(getRandomNumber(1, 10));
  };
  const getOperator = (num1: number, num2: number): string => {
    if (num1 < num2) {
      return "<";
    } else if (num1 > num2) {
      return ">";
    }
    return "=";
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!userInput) return;
      if (getOperator(leftNumber, rightNumber) === userInput) {
        setPoints(points + 1);
        setImgClass("right-answer-img");
        setPointsClass("right-answer-points");
      } else {
        setPoints(points - 1);
        setImgClass("wrong-answer-img");
        setPointsClass("wrong-answer-points");
      }
      setUserInput("");
      generateNewNumbers();
    } else {
      setImgClass("");
      setPointsClass("");
    }
  };

  const [leftNumber, setLeftNumber] = useState(getRandomNumber(1, 10));
  const [rightNumber, setRightNumber] = useState(getRandomNumber(1, 10));
  const [userInput, setUserInput] = useState("");

  return (
    <div className={"croc-form-container"}>
      <div className={"croc-number"}>{leftNumber}</div>
      <input
        className={"croc-input"}
        type="text"
        autoFocus
        maxLength={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={userInput}
      />
      <div className={"croc-number"}>{rightNumber}</div>
    </div>
  );
}

export default GeneratedNumbers;
