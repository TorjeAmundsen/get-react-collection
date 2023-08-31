import { useEffect, useRef, useState } from "react";

function TrafficLight() {
  const [redLightState, setRedLightState] = useState(true);
  const [yellowLightState, setYellowLightState] = useState(true);
  const [greenLightState, setGreenLightState] = useState(true);
  const setLightsArray = [
    setRedLightState,
    setYellowLightState,
    setGreenLightState,
  ];

  const velocity = useRef(1);
  const interval = useRef(0);
  const light = useRef(0);

  useEffect(() => {
    interval.current = 0;
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const setLights = (red: boolean, yellow: boolean, green: boolean) => {
    setRedLightState(red);
    setYellowLightState(yellow);
    setGreenLightState(green);
  };

  const setAll = (state: boolean) => {
    setLightsArray.forEach((e) => {
      e(state);
    });
  };

  const autoLights = () => {
    setLightsArray[light.current]((prev) => {
      return !prev;
    });
    light.current += velocity.current;
    setLightsArray[light.current]((prev) => {
      return !prev;
    });
    velocity.current =
      light.current === 0 || light.current === 2
        ? velocity.current * -1
        : velocity.current;
  };

  const toggleAutoLightsInterval = () => {
    console.log(interval.current);
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = 0;
    } else {
      setLights(true, false, false);
      light.current = 0;
      velocity.current = 1;
      interval.current = setInterval(autoLights, 1300);
    }
  };

  return (
    <>
      <div className="center-bottom-TL">
        TrafficLight is under construction.
      </div>
      <div className="buttons-container-TL">
        <button
          onClick={() => {
            setLights(true, false, false);
            clearInterval(interval.current);
            interval.current = 0;
          }}
          className="red-TL button-TL"
        >
          Red
        </button>
        <button
          onClick={() => {
            setLights(false, true, false);
            clearInterval(interval.current);
            interval.current = 0;
          }}
          className="yellow-TL button-TL"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setLights(false, false, true);
            clearInterval(interval.current);
            interval.current = 0;
          }}
          className="green-TL button-TL"
        >
          Green
        </button>
        <button
          onClick={() => {
            setAll(true);
            clearInterval(interval.current);
            interval.current = 0;
          }}
          className="button-TL"
        >
          All On
        </button>
        <button
          onClick={() => {
            setAll(false);
            clearInterval(interval.current);
            interval.current = 0;
          }}
          className="button-TL"
        >
          All Off
        </button>
        <button onClick={toggleAutoLightsInterval} className="button-TL">
          Automatic Cycle
        </button>
      </div>
      <div className="stem-TL"></div>
      <div className="container-TL">
        <div
          onClick={() => {
            setLights(true, false, false);
          }}
          className={`red-TL light-TL${redLightState ? " on-TL" : ""}`}
        ></div>
        <div
          onClick={() => {
            setLights(false, true, false);
          }}
          className={`yellow-TL light-TL${yellowLightState ? " on-TL" : ""}`}
        ></div>
        <div
          onClick={() => {
            setLights(false, false, true);
          }}
          className={`green-TL light-TL${greenLightState ? " on-TL" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default TrafficLight;
