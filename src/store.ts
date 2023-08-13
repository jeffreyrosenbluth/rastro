import { createSignal } from "solid-js";

export const [started, setStarted] = createSignal(false);
export const [winner, setWinner] = createSignal(false);
export const [playersText, setPlayersText] = createSignal("");
export const [completedAnimations, setCompletedAnimations] = createSignal(0);

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export const players = () => {
  if (playersText() === "") {
    return [];
  }
  const playerNames = playersText().split(",");
  const n = playerNames.length;
  const idxs = shuffle(range(0, n, 1));
  return playerNames.map((name, i) => ({
    name: name,
    idx: idxs[i],
    winner: idxs[i] === n - 1,
  }));
};

function shuffle(array: Array<number>) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
