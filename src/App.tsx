import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CrocodileGame from "./components/CrocodileGame";
import TrafficLight from "./components/TrafficLight";
import Magic8Ball from "./components/Magic8Ball";
import TaskPlannerBase from "./components/TaskPlannerBase";
import DevTest from "./components/DevTest";

function App() {
  const navComponents: JSX.Element[] = [
    <CrocodileGame />,
    <TrafficLight />,
    <Magic8Ball />,
    <TaskPlannerBase />,
    <DevTest />,
  ];

  const [navIndex, setNavIndex] = useState(0);

  useEffect(() => {
    document.title = documentTitles[navIndex];
  }, [navIndex]);

  return (
    <>
      <NavBar navIndex={navIndex} setNavIndex={setNavIndex} />
      <div>{navComponents[navIndex]}</div>
    </>
  );
}

export default App;

const documentTitles: string[] = [
  "Crocodile Game",
  "Traffic Light",
  "Magic 8-Ball",
  "Task Planner",
  "Torje's React Collection",
];
