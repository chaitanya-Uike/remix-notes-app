import AddNotesBtn, {
  links as AddNotesBtnLinks,
} from "~/components/AddNotesButton";
import NotesList, { links as NotesListLinks } from "~/components/NotesList";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Note } from "models/index.server";

export default function Index() {
  const notes = useLoaderData();
  return (
    <main>
      <NotesList notes={notes} />
      <AddNotesBtn />
    </main>
  );
}

export function CatchBoundary() {
  return (
    <div className="catchBoundary">
      Sorry, We are unable to fetch your notes right now
    </div>
  );
}

export async function loader() {
  try {
    const notes = await Note.findAll();
    return json(notes);
  } catch (error) {
    throw json({ msg: "some error occurred while fetching your Notes" });
  }
}

export function links() {
  return [...AddNotesBtnLinks(), ...NotesListLinks()];
}
