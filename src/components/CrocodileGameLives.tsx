import CrocodileGameHeart from "./CrocodileGameHeart";

interface Lives {
  lives: number;
}

function CrocodileGameLives({ lives }: Lives) {
  return (
    <div>
      <CrocodileGameHeart index={1} lives={lives} />
      <CrocodileGameHeart index={2} lives={lives} />
      <CrocodileGameHeart index={3} lives={lives} />
    </div>
  );
}

export default CrocodileGameLives;
