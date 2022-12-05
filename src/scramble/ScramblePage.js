import React from "react";
import "./index.css";
export default function ScramblePage() {
  return (
    <div className="container">
      <h2>Word Scramble</h2>
      <div className="content">
        <p className="word"></p>
        <div className="details">
          <p className="hint">
            Hint: <span></span>
          </p>
          <p className="time">
            Time Left:{" "}
            <span>
              <b>120</b>s
            </span>
          </p>
        </div>
        <input
          type="text"
          spellCheck="false"
          placeholder="Enter a valid word"
        />
        <div className="buttons">
          <button className="refresh-word">Refresh Word</button>
          <button className="check-word">Check Word</button>
        </div>
      </div>
    </div>
  );
}
