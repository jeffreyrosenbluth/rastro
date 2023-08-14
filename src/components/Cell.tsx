import type { Accessor } from "solid-js";
import "../styles/animation.css";

type CellProps = {
  name: string;
  index: number;
  winner: boolean;
  numPlayers: number;
  started: boolean;
  completedAnimations: number;
  setCompletedAnimations: (n: number) => void;
};

export function Cell(props: CellProps) {
  const delay = 1 + 2 * props.index + "s";

  const randInt = (min: number, max: number) => Math.floor(randRange(min, max));
  const randRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const color = "#" + Math.floor(randRange(0.1, 0.9) * 16777215).toString(16);

  const cellStyle =
    "flex justify-center items-center text-2xl lg:text-4xl h-20 lg:h-40 overflow-hidden rounded-lg text-white ";

  let anim = (win: boolean) => (win ? "winner" : "ciao");
  let animDone = false;

  return (
    <div
      onAnimationEnd={(e) => {
        animDone = true;
        props.setCompletedAnimations(props.completedAnimations + 1);
        if (props.completedAnimations === props.numPlayers) {
          props.setCompletedAnimations(0);
        }
      }}
      style={{
        "background-color": `${color}`,
        "animation-name": `${anim(props.winner)}`,
        "animation-duration": "2s",
        "animation-delay": `${delay}`,
        "animation-fill-mode": "both",
        "animation-play-state":
          props.started && !animDone ? "running" : "paused",
      }}
      class={cellStyle}
    >
      {props.name}
    </div>
  );
}
