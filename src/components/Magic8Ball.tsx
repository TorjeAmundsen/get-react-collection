import { useState } from "react";

function Magic8Ball() {
  const [answersList, setAnswersList] = useState([
    "It's possible.",
    "Yes!",
    "Maybe.",
    "Absolutely not.",
    "Never ever!",
    "If you're lucky.",
    "Unlikely...",
    "Absolutely!",
  ]);

  const [answer, setAnswer] = useState("Click to Generate Answer");
  const [shadowStyle, setShadowStyle] = useState("box-shadow: 0 0 25px #000");
  const [cooldown, setCooldown] = useState(false);

  const handleClick = () => {
    const newAnsIndex: number = Math.floor(
      Math.random() * (answersList.length - 1)
    );
    const arr: string[] = JSON.parse(JSON.stringify(answersList));
    arr.push(arr.splice(newAnsIndex, 1)[0]);
    setAnswersList(arr);
    setAnswer(arr[arr.length - 1]);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cooldown) return;
    setCooldown(true);
    const shadowX: number = (window.innerWidth / 2 - event.clientX) / 15;
    const shadowY: number = (window.innerHeight / 2 - event.clientY) / 15;
    const shadowBlur: number = Math.sqrt((shadowX - shadowY) ** 2) / 3 + 25;
    setTimeout(() => {
      setCooldown(false);
      setShadowStyle(
        `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.66)`
      );
    }, 16);
  };

  return (
    <div className="container-8ball" onMouseMove={handleMouseMove}>
      <div
        className="outer-ball"
        onClick={handleClick}
        style={{
          boxShadow: shadowStyle,
          transition: "800ms",
        }}
      >
        <div className="inner-ball">
          <div className="answer-8ball">
            <span className="text-span-8ball">{answer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magic8Ball;
