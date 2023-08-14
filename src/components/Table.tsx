import { For } from "solid-js";
import { Cell } from "./Cell";

export function Table(props: {
  players: Array<{ name: string; idx: number; winner: boolean }>;
  started: boolean;
  completedAnimations: number;
  setCompletedAnimations: (n: number) => void;
}) {
  return (
    <div class="grid grid-cols-4 gap-4">
      <For each={props.players}>
        {(p) => {
          return (
            <Cell
              name={p.name}
              index={p.idx}
              winner={p.winner}
              numPlayers={props.players.length}
              started={props.started}
              completedAnimations={props.completedAnimations}
              setCompletedAnimations={props.setCompletedAnimations}
            />
          );
        }}
      </For>
    </div>
  );
}
