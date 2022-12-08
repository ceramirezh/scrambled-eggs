import { useState } from "react";

const AuthorName = ({ quoteAuthor }) => {
  const [authorHidden, setAuthorHidden] = useState(false);

  return (
    <>
      <h3>Who said this?</h3>
      <div>
        {authorHidden ? (
          <div>
            <p>{quoteAuthor}</p>
          </div>
        ) : null}
      </div>
      <label className="switch">
        <input
          type="checkbox"
          value={authorHidden}
          // checked={setAuthorHidden(false)}
          onChange={(e) => {
            console.log(e);
            if (e.target.checked === false) {
              setAuthorHidden(false);
            } else {
              setAuthorHidden(true);
            }
          }}
        />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default AuthorName;
