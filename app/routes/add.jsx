import { redirect, json } from "@remix-run/node";
import { Note } from "models/index.server";
import AddNoteForm, {
  links as AddNoteFormLinks,
} from "~/components/AddNoteForm";

export default function AddNotePage() {
  return (
    <div>
      <AddNoteForm />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const newNote = Object.fromEntries(formData);

  try {
    await Note.create({ ...newNote });
    return redirect("/");
  } catch (error) {
    throw json({ msg: "Something went wrong!" });
  }
}

export function CatchBoundary() {
  return (
    <div className="catchBoundary">
      <p>Oops! something went wrong</p>
      <p style={{ fontSize: 16 }}>Note could not be created</p>
    </div>
  );
}

export function links() {
  return [...AddNoteFormLinks()];
}
