import { For } from "solid-js";
import { Cell } from "./Cell";
import { players } from "../store";

export function Table() {
  return (
    <div class="grid grid-cols-4 gap-4">
      <For each={players()}>
        {(p) => {
          return <Cell name={p.name} index={p.idx} winner={p.winner} />;
        }}
      </For>
    </div>
  );
}
