import data from "../Data/data.json";
import shuffle from "./Shuffle";

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
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="userInput" />
        <button>Submit</button>
      </form>
      <div>
        <h2>{shuffledWord}</h2>
      </div>
    </>
  );
};

export default initGame;
