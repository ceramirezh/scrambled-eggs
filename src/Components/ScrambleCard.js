import { useState } from "react";

const ScrambleCard = ({ oneWord, allWords, index }) => {
  const [word, setWord] = useState("");

  return (
    <div>
      <h3>{oneWord}</h3>
      <form>
        <p>
          <label>
            word:{" "}
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </label>
        </p>
        <p>{word === allWords[index] ? "correct" : "wrong word"}</p>
      </form>
    </div>
  );
};

export default ScrambleCard;
