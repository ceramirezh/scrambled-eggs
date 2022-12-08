import data from "../Data/data.json";
import shuffle from "../Components/Shuffle";
import { useState } from "react";
import ScrambleCard from "../Components/ScrambleCard";

const InitGame = () => {
  const dataLength = data.length;
  const pickRandomItemFromArray = Math.floor(Math.random() * dataLength);

  const test = data[pickRandomItemFromArray];

  const quoteAuthor = Object.keys(test);
  //   console.log("author", quoteAuthor);

  const arrayOfQuotes = test[Object.keys(test)[0]];
  //   console.log("array of quotes", arrayOfQuotes);

  const getOneRandomQuote = Math.floor(Math.random() * arrayOfQuotes.length);

  //console.log("get one random quote", getOneRandomQuote);

  const arrayWords = arrayOfQuotes[getOneRandomQuote].split(" ");
  console.log("array words", arrayWords);

  const allWords = arrayWords.map((word) => {
    return word;
  });

  const shuffledWords = allWords.map((word) => {
    return shuffle(word.split(""));
  });

  return (
    <div>
      <div>
        <h2>Scramble Words</h2>
        <button onClick={() => window.location.reload()}>GET NEW PUZZE</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {shuffledWords.map((oneWord, index) => (
          <ScrambleCard
            key={index}
            oneWord={oneWord}
            allWords={allWords}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default InitGame;