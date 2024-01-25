import { useState } from "react";

function Dictionary() {
  const [words, setWords] = useState("");
  const styles = {
    marginTop: "100px",
  };

  return (
    <>
      <input
        style={styles}
        type="text"
        onChange={(e) => {
          setWords(e.target.value);
        }}
      />
      <p>Lets Find a meaning for {words}</p>
    </>
  );
}

export default Dictionary;
