import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface GridProps {
  //Your component props
}

let x = 50;
const y = 50;

const Grid: React.FC<GridProps> = (props: GridProps) => {
  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Grid;
