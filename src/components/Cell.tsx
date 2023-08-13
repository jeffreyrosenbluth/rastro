import {
  players,
  setStarted,
  started,
  completedAnimations,
  setCompletedAnimations,
} from "../store";
import "../styles/animation.css";

export function Cell(props: { name: string; index: number; winner: boolean }) {
  const delay = 1 + 2 * props.index + "s";

  const randInt = (min: number, max: number) => Math.floor(randRange(min, max));
  const randRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const color = "#" + Math.floor(randRange(0.1, 0.9) * 16777215).toString(16);

  const cellStyle =
    "flex justify-center items-center text-2xl lg:text-4xl h-20 lg:h-40 overflow-hidden rounded-lg text-white ";

  const loseStyle = cellStyle;
  const winStyle = cellStyle;

  let anim = (win: boolean) => (win ? "winner" : "ciao");
  let animDone = false;

  return (
    <div
      onAnimationEnd={(e) => {
        animDone = true;
        setCompletedAnimations(completedAnimations() + 1);
        if (completedAnimations() === players().length) {
          setCompletedAnimations(0);
        }
      }}
      style={{
        "background-color": `${color}`,
        "animation-name": `${anim(props.winner)}`,
        "animation-duration": "2s",
        "animation-delay": `${delay}`,
        "animation-fill-mode": "both",
        "animation-play-state": started() && !animDone ? "running" : "paused",
      }}
      class={cellStyle}
    >
      {props.name}
    </div>
  );
}
