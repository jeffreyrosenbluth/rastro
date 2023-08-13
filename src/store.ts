
import { createSignal } from "solid-js";

export const [started, setStarted] = createSignal(false);
export const [winner, setWinner] = createSignal(false);
export const [playersText, setPlayersText] = createSignal("");

export const playerNames = () => {
  return playersText() === "" ? [] : playersText().split(",");
};
