interface HeartState {
  index: number;
  lives: number;
}

function CrocodileGameHeart({ index, lives }: HeartState) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="-2 -2 20 20"
    >
      <path
        fill="red"
        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92C0 2.755 1.79 1 4 1z"
        className={"croc-heart" + (lives >= index ? " filled" : "")}
      />
    </svg>
  );
}

export default CrocodileGameHeart;
