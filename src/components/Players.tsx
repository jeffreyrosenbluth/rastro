import { playersText, setPlayersText } from "../store";

export function Players() {
  const content = localStorage.getItem("playersText");
  if (content) {
    setPlayersText(content);
  }
  return (
    <>
      <textarea
        value={playersText()}
        cols="80"
        rows="5"
        class="bg-gray-500 border-2 border-gray-500 focus:outline-none  rounded p-1 m-8"
        onInput={(e) => {
          setPlayersText(e.currentTarget.value);
          if (localStorage) {
            localStorage.setItem("playersText", e.currentTarget.value);
          }
        }}
      />
    </>
  );
}
