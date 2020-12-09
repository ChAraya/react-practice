import React, { useState, useEffect } from "react";
// useEffect se ejecuta una vez se termina de cargar toda la pagina
const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {}, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasic;
