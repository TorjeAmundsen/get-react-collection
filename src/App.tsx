import { useState } from "react";
import NavBar from "./components/NavBar";
import KrokodilleSpill from "./components/KrokodilleSpill";
import TrafficLight from "./components/TrafficLight";
import Magic8Ball from "./components/Magic8Ball";
import TaskPlannerBase from "./components/TaskPlannerBase";
import DevTest from "./components/DevTest";

function App() {
  const navComponents: JSX.Element[] = [
    <KrokodilleSpill />,
    <TrafficLight />,
    <Magic8Ball />,
    <TaskPlannerBase />,
    <DevTest />,
  ];
  const [navIndex, setNavIndex] = useState(0);
  return (
    <>
      <NavBar navIndex={navIndex} setNavIndex={setNavIndex} />
      <div>{navComponents[navIndex]}</div>
    </>
  );
}

export default App;
