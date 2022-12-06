import data from "../Data/data.json";
import shuffle from "./Shuffle";
import "./Scramble.css";

const initGame = () => {
  const findAWord = data.Teacher1.word1;
  const wordToShuffle = findAWord.split("");
  const shuffledWord = shuffle(wordToShuffle);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    console.log(userInput);

    if (userInput === findAWord) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };

  return (
    <>
      <div className="mainBox">
        <div className="shuffledWord">
          <h2>{shuffledWord}</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="userInput" />
          <div className="button-box">
            <button className="buttonClass">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default initGame;
