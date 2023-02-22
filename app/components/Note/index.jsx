import { getDate } from "~/utils";
import styles from "./style.css";
import { Link } from "@remix-run/react";

export default function Note({ note }) {
  return (
    <Link
      to={`/${note.id}`}
      className="note"
      style={{ backgroundColor: note.color }}
    >
      <h1 className="noteTitle">{note.title}</h1>
      <p className="noteContent">{note.content}</p>
      <p className="noteDate">{getDate(note.createdAt)}</p>
    </Link>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
