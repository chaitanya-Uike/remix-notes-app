import Note, { links as NoteLinks } from "../Note";

import styles from "./style.css";

export default function NotesList({ notes, query }) {
  return (
    <div className="notesListContainer">
      {notes.length > 0 ? (
        notes.map((note) => <Note note={note} key={note.id} query={query} />)
      ) : (
        <p className="noNotesPlaceholder">
          {query.length > 0
            ? "Sorry we coudn't find what you are looking for"
            : "Nothing to see here, add a note to get started!"}
        </p>
      )}
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...NoteLinks()];
}
