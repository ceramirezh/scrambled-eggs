import { useState, useEffect } from "react";
import "./Scramble.css";

const ScrambleCard = ({ oneWord, allWords, index }) => {
  const [time, setTime] = useState(45);
  const [word, setWord] = useState("");

  useEffect(() => {
    if (time > 0 && time !== 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word === allWords[index]) {
      alert("correct!");
    } else {
      alert("wrong!");
    }
  };

  return (
    <div className="mainDiv">
      <div className="mainBox">
        <h3 className="shuffledWord">{oneWord}</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <p>{time}</p>
            <label>
              Type the word:{" "}
              <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="button-box"
              />
            </label>
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ScrambleCard;
