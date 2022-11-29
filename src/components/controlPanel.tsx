import { useState } from "react";
import Button from "react-bootstrap/Button";

interface ControlPanelProps {
  isRunning: boolean;
  onStartStopButtonClick: () => void;
  onResetButtonClick: () => void;
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
        <Button
          variant={props.isRunning! ? "danger" : "success"}
          onClick={props.onStartStopButtonClick}
          className="StartStopButton"
        >
          {props.isRunning! ? "Stop" : "Start"}
        </Button>
        <Button
          variant="primary"
          className="ResetButton"
          onClick={props.onResetButtonClick}
        >
          Reset
        </Button>
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
