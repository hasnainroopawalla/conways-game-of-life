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
      <ControlPanel
        isRunning={isRunning}
        onStartButtonClick={toggleIsRunning}
        onFramerateChange={updateFramerate}
      />
      <Grid isRunning={isRunning} framerate={framerate} />
    </>
  );
}

export default GameOfLife;
