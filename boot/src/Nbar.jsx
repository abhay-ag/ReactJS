import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Nbar() {
  const [light, setLight] = useState("light");
  const [curStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
    transition: "none",
  });
  const handleClicks = () => {
    if (light === "light") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        transition: "none",
      });
      setLight("dark");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
        transition: "none",
      });
      setLight("light");
    }
  };
  return (
    <>
      <Navbar expand="lg" style={curStyle}>
        <Container>
          <Navbar.Brand style={curStyle} href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={curStyle} />
          <Navbar.Collapse id="basic-navbar-nav" style={curStyle}>
            <Nav className="me-auto" style={curStyle}>
              <Nav.Link href="#home" style={curStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={curStyle}>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            className={light === "light" ? "btn-primary" : "btn-secondary"}
            onClick={handleClicks}
          >
            {light === "light" ? "Dark" : "Light"}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar;
