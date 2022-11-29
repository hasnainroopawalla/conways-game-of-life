import { useState } from "react";
import ControlPanel from "./controlPanel";
import Grid from "./grid";

function GameOfLife() {
  const [isRunning, setIsRunning] = useState(false);
  const [framerate, setFramerate] = useState(10);

  const onStartStopButtonClick = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const onResetButtonClick = () => {
    alert("reset!");
  };

  const onFramerateChange = (framerate: number) => {
    setFramerate(framerate);
  };

  return (
    <>
      <div>
        <div id="ControlPanel">
          <ControlPanel
            isRunning={isRunning}
            onStartStopButtonClick={onStartStopButtonClick}
            onResetButtonClick={onResetButtonClick}
            onFramerateChange={onFramerateChange}
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
