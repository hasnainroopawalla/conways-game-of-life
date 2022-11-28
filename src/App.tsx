import "./App.css";
import GameOfLife from "./components/gameoflife";
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
                  GitHub @Hasnain Roopawalla
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <GameOfLife />
        <p>Hasnain Roopawalla, 2022</p>
      </div>
    </>
  );
}

export default App;
