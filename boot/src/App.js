import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";

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
    <>
      <Accordion defaultActiveKey="0" className= 'my-3 w-50 p-5'>
        <Accordion.Item eventKey="0" style={curStyle}>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={curStyle}>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button onClick={handleClick}>Change Mode</Button>
    </>
  );
}

export default App;
