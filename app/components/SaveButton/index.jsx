import { FaCheck } from "react-icons/fa";
import styles from "./style.css";

export default function SaveBtn() {
  return (
    <button type="submit" className="saveBtn">
      <FaCheck />
    </button>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
