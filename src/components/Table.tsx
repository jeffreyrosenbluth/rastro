import { createEffect, createSignal, For, Show } from "solid-js";
import { Cell } from "./Cell";
import { playerNames, started } from "../store";

export function Table() {
  const n = () => playerNames().length - 1;
  const idxs = () => shuffle(range(0, playerNames().length, 1));

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

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

  return (
    <div class="grid grid-cols-4 gap-4">
      <For each={playerNames()}>
        {(nm, i) => {
          console.log("started", i(), idxs()[i()], idxs());
          return <Cell name={nm} index={idxs()[i()]} />;
        }}
      </For>
    </div>
  );
}
