import { FaPlus } from "react-icons/fa";
import { Link } from "@remix-run/react";

import styles from "./style.css";

export default function AddNotesBtn() {
  return (
    <Link to={"/add"} className="addNotesBtn">
      <FaPlus />
    </Link>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
