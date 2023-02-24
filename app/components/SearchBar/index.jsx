import { useRef } from "react";
import { Form, useSubmit } from "@remix-run/react";
import { FaSistrix } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import styles from "./style.css";

export default function SearchBar({ query, setQuery }) {
  const submit = useSubmit();
  const timeoutIdRef = useRef();
  const formRef = useRef();

  function searchNotes() {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(() => {
      // event.currentTarget is null thats why I have to explicitly create and pass ref
      submit(formRef.current, { method: "post" });
    }, 250);
  }

  return (
    <div className="searchBarContainer">
      <FaSistrix />
      <Form onChange={searchNotes} ref={formRef}>
        <input
          type="text"
          name="query"
          className="searchbar"
          placeholder="Find notes faster by searching"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </Form>
      {query.length > 0 && (
        <div
          className="clearSearchbar"
          onClick={() => {
            setQuery("");
          }}
        >
          <CgClose />
        </div>
      )}
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
