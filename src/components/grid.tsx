import Sketch from "react-p5";
import p5Types from "p5";
import { useState } from "react";
import { getNeighbors } from "./helpers";

interface GridProps {
  isRunning: boolean;
  framerate: number;
}

let [numRows, numCols] = [0, 0];
let [cellWidth, cellHeight] = [10, 10];

function Grid(props: GridProps) {
  let [grid, setGrid] = useState<boolean[][]>([]);

  function generateGrid(numRows: number, numCols: number) {
    let grid: boolean[][] = [];
    for (let i = 0; i < numRows; i++) {
      grid[i] = [];
      for (let j = 0; j < numCols; j++) {
        grid[i][j] = false;
        if (Math.random() < 0.2) {
          grid[i][j] = true;
        }
      }
    }
    setGrid(grid);
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.frameRate(10);

    var width = document.getElementById("Grid")!.clientWidth;
    var height = document.getElementById("Grid")!.clientHeight;

    p5.createCanvas(width, height).parent(canvasParentRef);

    [numRows, numCols] = [
      Math.ceil(width / cellWidth),
      Math.ceil(height / cellHeight),
    ];
    generateGrid(numRows, numCols);
  };

  function updateGrid() {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        getNeighbors(i, j, numRows, numCols);
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
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
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
