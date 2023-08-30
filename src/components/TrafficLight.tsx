import { useState } from "react";
import { useEffect } from "react";

function TrafficLight() {
  const [redOn, setRedOn] = useState(true);
  const [yellowOn, setYellowOn] = useState(true);
  const [greenOn, setGreenOn] = useState(true);
  const [velocity, setVelocity] = useState(0);
  const [running, setRunning] = useState(false);

  const getDelay = (min: number, max: number): number => {
    const x: number = Math.floor(min);
    const y: number = Math.floor(max);
    return Math.floor(Math.random() * (y - x + 1) + x);
  };
  const setLights = (red: boolean, yellow: boolean, green: boolean) => {
    setRedOn(red);
    setYellowOn(yellow);
    setGreenOn(green);
  };
  const setAll = (state: boolean) => {
    setRedOn(state);
    setYellowOn(state);
    setGreenOn(state);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVelocity((prev) => prev * -1);
    }, getDelay(3000, 10000));
    return () => {
      clearTimeout(timeout);
    };
  }, [velocity]);
  useEffect(() => {
    if (running) {
      setTimeout(() => {}, 800);
    }
  }, [running]);
  return (
    <>
      <div className="buttons-container-TL">
        <button
          onClick={() => {
            setLights(true, false, false);
          }}
          className="red-TL button-TL"
        >
          Red
        </button>
        <button
          onClick={() => {
            setLights(false, true, false);
          }}
          className="yellow-TL button-TL"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setLights(false, false, true);
          }}
          className="green-TL button-TL"
        >
          Green
        </button>
        <button
          onClick={() => {
            setAll(true);
          }}
          className="button-TL"
        >
          All On
        </button>
        <button
          onClick={() => {
            setAll(false);
          }}
          className="button-TL"
        >
          All Off
        </button>
        <button
          onClick={() => {
            setRunning(!running);
          }}
          className="button-TL"
        >
          Automatic Cycle
        </button>
      </div>
      <div className="center-bottom-TL">
        TrafficLight is under construction.
      </div>
      <div className="stem-TL"></div>
      <div className="container-TL">
        <div
          onClick={() => {
            setLights(true, false, false);
          }}
          className={`red-TL light-TL${redOn ? " on-TL" : ""}`}
        ></div>
        <div
          onClick={() => {
            setLights(false, true, false);
          }}
          className={`yellow-TL light-TL${yellowOn ? " on-TL" : ""}`}
        ></div>
        <div
          onClick={() => {
            setLights(false, false, true);
          }}
          className={`green-TL light-TL${greenOn ? " on-TL" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default TrafficLight;
