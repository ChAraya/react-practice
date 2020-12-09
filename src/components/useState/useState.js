import React, { useState } from "react";

const UseState = () => {
  //const value = useState(1)[0];
	const [text, setText] = useState('random title');
	const handleClick = () => {
		if(text === 'random title'){
			setText('new title');
		}else{
			setText('random title');
		}
		
	}
  return <React.Fragment>
		<h1>{text}</h1>
		<button type="button" className="btn" onClick={handleClick}>Change Title</button>
	</React.Fragment>;
};

export default UseState;
