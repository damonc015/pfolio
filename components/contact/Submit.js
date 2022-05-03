import React from "react";

const Submit = (props) => {
  const { setStatus, error } = props;
  return (
    <div id="submitContainer">
      <h2>{error ? "Something went wrong!" : "Message sent!"}</h2>
      <button
        onClick={() => {
          setStatus("");
        }}
      >
        {error ? "Try again" : "Send another"}
      </button>
    </div>
  );
};

export default Submit;
