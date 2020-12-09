import React, { useEffect, useRef } from "react";
// preserves value
//Does not trigger re-render
//target the DOM nodes/elements

function UseRefBasic() {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default UseRefBasic;
