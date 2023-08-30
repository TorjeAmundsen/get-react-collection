import { useState } from "react";
import GeneratedNumbers from "./GeneratedNumbers";
import PointsField from "./PointsField";

function KrokodilleSpill() {
  const [points, setPoints] = useState(0);
  const [imgClass, setImgClass] = useState("");
  const [pointsClass, setPointsClass] = useState("");
  return (
    <>
      <div className="croc-app-container">
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
        />
      </div>
    </>
  );
}

export default KrokodilleSpill;
