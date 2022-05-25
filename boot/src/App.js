import React, { useState } from "react";
import Accor from "./Accor";
import Nbar from "./Nbar";

function App() {
  const [curStyle, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const handleClick = () => {
    if (curStyle.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };
  return (
    <div>
      <Nbar />
      <Accor curStyle={curStyle} handleClick = {handleClick}/>
    </div>
  );
}

export default App;
