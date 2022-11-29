import "./App.css";
import GameOfLife from "./components/gameOfLife";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Conways Game of Life</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a href="https://github.com/hasnainroopawalla/conways-game-of-life">
                  GitHub
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <GameOfLife />
        <a href="https://www.hasnainr.com/">@ Hasnain Roopawalla</a>
      </div>
    </>
  );
}

export default App;
