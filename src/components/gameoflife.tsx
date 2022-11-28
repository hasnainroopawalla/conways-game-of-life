import { useState } from "react";
import ControlPanel from "./controlPanel";
import Grid from "./grid";

function GameOfLife() {
  const [isRunning, setIsRunning] = useState(false);
  const [framerate, setFramerate] = useState(10);

  const toggleIsRunning = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const updateFramerate = (framerate: number) => {
    setFramerate(framerate);
  };

  return (
    <>
      <div>
        <div id="MyInfo">
          <p>Hi</p>
        </div>
        <div id="ControlPanel">
          <ControlPanel
            isRunning={isRunning}
            onStartButtonClick={toggleIsRunning}
            onFramerateChange={updateFramerate}
          />
        </div>
        <div id="Grid">
          <Grid isRunning={isRunning} framerate={framerate} />
        </div>
      </div>
    </>
  );
}

export default GameOfLife;
