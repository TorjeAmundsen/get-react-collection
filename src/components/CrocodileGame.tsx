import { useState } from "react";
import GeneratedNumbers from "./GeneratedNumbers";
import PointsField from "./PointsField";
import CrocodileGameLives from "./CrocodileGameLives";

function CrocodileGame() {
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [imgClass, setImgClass] = useState("");
  const [pointsClass, setPointsClass] = useState("");

  const handleClick = () => {
    setPoints(0);
    setLives(3);
    setPointsClass("");
    setImgClass("");
  };
  if (lives === 0) {
    return (
      <>
        <div className="croc-app-container points">
          <div className="croc-game-over">GAME OVER</div>
          <div className="croc-points">Points: {points}</div>
          <button onClick={handleClick} className="croc-reset-button">
            Try again?
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="croc-app-container">
        <CrocodileGameLives lives={lives} />
        <PointsField
          setPoints={setPoints}
          points={points}
          imgClass={imgClass}
          pointsClass={pointsClass}
        />
        <GeneratedNumbers
          setPoints={setPoints}
          points={points}
          setImgClass={setImgClass}
          setPointsClass={setPointsClass}
          setLives={setLives}
        />
      </div>
    </>
  );
}

export default CrocodileGame;
