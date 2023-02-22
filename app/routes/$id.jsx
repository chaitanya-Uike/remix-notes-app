import { Note } from "models/index.server";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import AddNoteForm, {
  links as AddNoteFormLinks,
} from "~/components/AddNoteForm";

import styles from "../styles/editPage.css";

export default function NoteEditPage() {
  const note = useLoaderData();
  return (
    <div>
      <AddNoteForm note={note} />
      <Form method="POST">
        <input type="hidden" name="_action" value="delete" />
        <button className="DeleteButton" type="submit">
          Delete
        </button>
      </Form>
    </div>
  );
}

export async function loader({ params }) {
  const { id } = params;
  try {
    const note = await Note.findByPk(id);
    return json(note);
  } catch (error) {
    throw json({ msg: "some error occurred while fetching note" });
  }
}

export async function action({ request, params }) {
  const { id } = params;
  const formData = await request.formData();

  if (formData.get("_action") === "delete") {
    try {
      await Note.destroy({ where: { id } });
      return redirect("/");
    } catch (error) {
      throw json({ msg: "Note could not be deleted" });
    }
  }

  const newNote = Object.fromEntries(formData);

  try {
    await Note.update({ ...newNote }, { where: { id } });
    return redirect("/");
  } catch (error) {
    throw json({ msg: "Note could not be updated" });
  }
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

export function links() {
  return [...AddNoteFormLinks(), { rel: "stylesheet", href: styles }];
}
