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
  const timeout = useRef(0);
  const light = useRef(0);

  useEffect(() => {
    timeout.current = 0;
    return () => {
      clearTimeout(timeout.current);
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

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const autoLights = async () => {
    if (light.current !== 0 && velocity.current !== 1) {
      setLightsArray[light.current]((prev) => {
        return !prev;
      });
    }
    if (light.current === 1 && velocity.current === 1) {
      setRedLightState(false);
      setYellowLightState(false);
    }
    light.current += velocity.current;
    setLightsArray[light.current]((prev) => {
      return !prev;
    });
    velocity.current =
      light.current === 0 || light.current === 2
        ? velocity.current * -1
        : velocity.current;
    if (light.current === 1) {
      timeout.current = setTimeout(autoLights, 1800);
    } else {
      timeout.current = setTimeout(autoLights, getRandomNumber(3000, 7000));
    }
  };

  const toggleAutoLightsInterval = () => {
    console.log(timeout.current);
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = 0;
    } else {
      setLights(true, false, false);
      light.current = 0;
      velocity.current = 1;
      timeout.current = setTimeout(autoLights, 1800);
    }
  };

  return (
    <>
      <div className="buttons-container-TL">
        <button
          onClick={() => {
            setAll(true);
            clearTimeout(timeout.current);
            timeout.current = 0;
          }}
          className="button-TL"
        >
          All On
        </button>
        <button
          onClick={() => {
            setAll(false);
            clearTimeout(timeout.current);
            timeout.current = 0;
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
