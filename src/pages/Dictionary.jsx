import { useState } from "react";

function Dictionary() {
  const [word, setWord] = useState("");
  const styles = {
    marginTop: "100px",
  };

  return (
    <>
      <input
        style={styles}
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <p>Lets Find a meaning for {word}</p>
    </>
  );
}

export default Dictionary;
