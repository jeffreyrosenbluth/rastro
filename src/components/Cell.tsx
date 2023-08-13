import { winner, started } from "../store";
import "../styles/animation.css";

export function Cell(props: { name: string; index: number }) {
  const delay = 2 + 2 * props.index + "s";

  const randInt = (min: number, max: number) => Math.floor(randRange(min, max));
  const randRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const color = "#" + Math.floor(randRange(0.1, 0.9) * 16777215).toString(16);

  const cellStyle =
    "flex justify-center items-center text-4xl h-40 overflow-hidden rounded-lg";

  const loseStyle = cellStyle;
  const winStyle = cellStyle;

  let anim = (win: boolean) => (win ? "winner" : "ciao");

  return (
    <div
      style={{
        "background-color": `${color}`,
        "animation-name": "ciao",
        "animation-duration": "2s",
        "animation-delay": `${delay}`,
        "animation-fill-mode": "both",
        "animation-play-state": started() ? "running" : "paused",
      }}
      class={cellStyle}
    >
      {props.name}
    </div>
  );
}
