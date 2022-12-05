import data from "../Data/data.json";

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const initGame = () => {
  //   let scrambledData = shuffle(data);
  //   console.log(scrambledData);

  const findAWord = data.Teacher1.word1.split("");
  const shuffledWord = shuffle(findAWord);
  //   console.log(shuffledWord);

  return (
    <>
      <h2>{shuffledWord}</h2>
    </>
  );
};

export default initGame;
