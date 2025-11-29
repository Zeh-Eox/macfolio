import useWindowStore from "@/store/window";
import type { WindowConfig } from "@/types";

interface WindowControlsProps {
  target: keyof WindowConfig;
}

const WindowControls = ({ target }: WindowControlsProps) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <button
        type="button"
        className="close"
        onClick={() => closeWindow(target)}
        aria-label="Close Window"
      ></button>
    </div>
  );
};

export default WindowControls;
