import { useState } from "react";

interface ControlPanelProps {
  isRunning: boolean;
  onStartButtonClick: () => void;
  onFramerateChange: (framerate: number) => void;
}

function ControlPanel(props: ControlPanelProps) {
  const [framerate, setFramerate] = useState(10);

  function updateFramerate(value: number) {
    props.onFramerateChange(value);
    setFramerate(value);
  }

  return (
    <>
      <div>
        <button onClick={props.onStartButtonClick}>
          {props.isRunning! ? "Stop" : "Start"}
        </button>
        <button>Random</button>
        <label>Framerate</label>
        <input
          type="range"
          min="1"
          max="30"
          value={framerate}
          onChange={(event) =>
            updateFramerate(parseInt((event.target as HTMLInputElement).value))
          }
        />
      </div>
    </>
  );
}

export default ControlPanel;
