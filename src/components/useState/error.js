import React from "react";

const Error = () => {
	let title = "random title";
	
	const handleClick = () => {
		this.title = "I change";
	}

  return(
  <React.Fragment>
    <h2>{title}</h2>
		<button type="button" className="btn" onClick={handleClick}>Change Title</button>
	</React.Fragment>
	);
};

export default Error;
