import { Link } from "@remix-run/react";
import styles from "./style.css";

export default function MainHeader() {
  return (
    <div className="mainHeader">
      <Link to={"/"}>Notes</Link>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
