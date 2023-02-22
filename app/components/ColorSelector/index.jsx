import { FaCheck } from "react-icons/fa";
import styles from "./style.css";

const COLORS = [
  "#FFAB91",
  "#FFCC80",
  "#E6EE9B",
  "#80DEEA",
  "#CF93D9",
  "#F48FB1",
  "#80CBC4",
];

function Colorblob({ color, selected, setSelectedColor }) {
  return (
    <div
      className="colorBlob"
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    >
      {selected && <FaCheck />}
    </div>
  );
}

export default function ColorSelector({ selectedColor, setSelectedColor }) {
  return (
    <div className="colorSelector">
      {COLORS.map((color, index) => {
        return (
          <Colorblob
            color={color}
            key={index}
            selected={color === selectedColor}
            setSelectedColor={setSelectedColor}
          />
        );
      })}
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
