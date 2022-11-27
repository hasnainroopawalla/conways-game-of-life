import Sketch from "react-p5";
import p5Types from "p5";
import { useState } from "react";

interface GridProps {
  isRunning: boolean;
  framerate: number;
}

const [gridRows, gridCols] = [40, 20];
const [canvasWidth, canvasHeight] = [800, 400];

let [cellWidth, cellHeight] = [canvasWidth / gridRows, canvasHeight / gridCols];

function Grid(props: GridProps) {
  let [grid, setGrid] = useState<boolean[][]>([]);

  function generateGrid() {
    let grid: boolean[][] = [];
    for (let i = 0; i < gridRows; i++) {
      grid[i] = [];
      for (let j = 0; j < gridCols; j++) {
        grid[i][j] = false;
        if (Math.random() < 0.2) {
          grid[i][j] = true;
        }
      }
    }
    setGrid(grid);
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    generateGrid();
    p5.frameRate(10);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  function updateGrid() {
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridCols; j++) {
        let isAlive = true;
        if (Math.random() < 0.8) {
          isAlive = false;
        }
        grid[i][j] = isAlive;
      }
    }
    setGrid(grid);
  }

  function displayGrid(p5: p5Types) {
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridCols; j++) {
        p5.fill(grid[i][j] ? 255 : 80);
        p5.stroke("black");
        p5.strokeWeight(1);
        p5.rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      }
    }
  }

  const draw = (p5: p5Types) => {
    p5.background(0);
    if (props.isRunning) {
      updateGrid();
    }
    displayGrid(p5);
    p5.frameRate(props.framerate);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default Grid;
