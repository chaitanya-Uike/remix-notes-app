import { useState } from "react";
import { Form } from "@remix-run/react";
import SaveBtn, { links as SaveBtnLinks } from "../SaveButton";
import ColorSelector, { links as ColorSelectorLinks } from "../ColorSelector";

import styles from "./style.css";

export default function AddNoteForm({ note }) {
  const [selectedColor, setSelectedColor] = useState(note?.color || "#FFAB91");
  const [content, setContent] = useState(note?.content || "");
  const [title, setTitle] = useState(note?.title || "");

  return (
    <div>
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Form className="addNoteForm" method="POST">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          type="text"
          name="content"
          id="content"
          placeholder="Compose an Epic..."
          value={content}
          onChange={(e) => {
            const text = e.target.value.slice(0, 255);
            setContent(text);
          }}
          required
        />
        <p className="contentSize">{content.length}/255</p>
        <input type="hidden" name="color" value={selectedColor} />
        {title.trim().length > 0 && content.trim().length > 0 && <SaveBtn />}
      </Form>
    </div>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    ...SaveBtnLinks(),
    ...ColorSelectorLinks(),
  ];
}
