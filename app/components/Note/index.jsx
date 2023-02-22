import { getDate } from "~/utils";
import styles from "./style.css";
import { Link } from "@remix-run/react";
import TextHighlighter from "../TextHighlighter";

export default function Note({ note, query }) {
  return (
    <Link
      to={`/${note.id}`}
      className="note"
      style={{ backgroundColor: note.color }}
    >
      <h1 className="noteTitle">
        <TextHighlighter sourceText={note.title} highlightedText={query} />
      </h1>
      <p className="noteContent">
        <TextHighlighter sourceText={note.content} highlightedText={query} />
      </p>
      <p className="noteDate">{getDate(note.createdAt)}</p>
    </Link>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
