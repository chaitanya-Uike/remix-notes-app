import Note, { links as NoteLinks } from "../Note";

import styles from "./style.css";

export default function NotesList({ notes }) {
  return (
    <div className="notesListContainer">
      {notes.length > 0 ? (
        notes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <p className="noNotesPlaceholder">
          Nothing to see here, add a note to get started!
        </p>
      )}
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...NoteLinks()];
}
