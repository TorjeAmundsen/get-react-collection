interface NavSelect {
  navIndex: number;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
}

function NavBar({ navIndex, setNavIndex }: NavSelect) {
  const options = [
    "CROCODILE GAME",
    "TRAFFIC LIGHT",
    "MAGIC 8-BALL",
    "TASK PLANNER",
    "DEV TEST",
  ];
  return (
    <div className={"nav-container"}>
      {options.map((item, i) => (
        <div
          className={navIndex === i ? "nav-item active" : "nav-item"}
          onClick={() => setNavIndex(i)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
