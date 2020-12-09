import React, { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstVal = text || "hello world";
  // const secondVal = text && "hello world";
  const changeError = () => {
    setIsError(!isError);
  };
  return (
    <>
      {/* <h1>{firstVal}</h1>
      <h1>value: {secondVal}</h1> */}
      <h1>{text || "christopher araya"}</h1>
      <button className="btn" onClick={changeError}>
        toggle error
      </button>
      {isError && <h1>error...</h1>}
      {isError ? <p>the is an error...</p> : <p>no error yet</p>}
    </>
  );
}

export default ShortCircuit;
