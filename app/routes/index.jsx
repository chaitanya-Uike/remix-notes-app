import { useState, useEffect } from "react";
import NotesList, { links as NotesListLinks } from "~/components/NotesList";
import { json } from "@remix-run/node";
import { useActionData, useCatch, useLoaderData } from "@remix-run/react";
import { Note, Op } from "models/index.server";
import AddNotesBtn, {
  links as AddNotesBtnLinks,
} from "~/components/AddNotesButton";
import SearchBar, { links as SearchBarLinks } from "~/components/SearchBar";

export default function Index() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  const allNotes = useLoaderData();
  const searchResults = useActionData();

  useEffect(() => {
    if (query.length > 0 && searchResults) setNotes([...searchResults]);
    else setNotes([...allNotes]);
  }, [searchResults, allNotes, query]);

  return (
    <main>
      <SearchBar query={query} setQuery={setQuery} />
      <NotesList notes={notes} query={query} />
      <AddNotesBtn />
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <div className="catchBoundary">
      <p>Oops! something went wrong</p>
      <p style={{ fontSize: 16 }}>{caught.data.msg}</p>
    </div>
  );
}

export async function loader() {
  try {
    const notes = await Note.findAll();
    return json(notes);
  } catch (error) {
    throw json({ msg: "Sorry we can't fetch your notes right now" });
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const query = formData.get("query");

  console.log(query);

  try {
    const results = await Note.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { content: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    return json(results);
  } catch (error) {
    throw json({ msg: "Something went wrong while searching" });
  }
}

export function links() {
  return [...AddNotesBtnLinks(), ...NotesListLinks(), ...SearchBarLinks()];
}
