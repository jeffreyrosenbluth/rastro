export function Players(props: {
  playersText: string;
  setPlayersText: (s: string) => void;
}) {
  const content = localStorage.getItem("playersText");
  if (content) {
    props.setPlayersText(content);
  }
  return (
    <>
      <textarea
        value={props.playersText}
        cols="80"
        rows="5"
        class="text-lg text-white bg-transparent border-2 border-gray-500 focus:outline-none  rounded p-1 mx-8 my-12"
        onInput={(e) => {
          props.setPlayersText(e.currentTarget.value);
          if (localStorage) {
            localStorage.setItem("playersText", e.currentTarget.value);
          }
        }}
      />
    </>
  );
}
