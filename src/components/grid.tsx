import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface GridProps {
  //Your component props
}

const [gridRows, gridCols] = [40, 20];
const [canvasWidth, canvasHeight] = [800, 400];

let [cellWidth, cellHeight] = [canvasWidth / gridRows, canvasHeight / gridCols];

const Grid: React.FC<GridProps> = (props: GridProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.frameRate(5);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridCols; j++) {
        let alive = true;
        if (Math.random() < 0.8) {
          alive = false;
        }
        p5.fill(alive ? 255 : 80);
        p5.stroke("black");
        p5.strokeWeight(1);
        p5.rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Grid;
