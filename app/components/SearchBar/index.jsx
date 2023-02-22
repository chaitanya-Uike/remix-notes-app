import { useEffect } from "react";
import { Form } from "@remix-run/react";
import { FaSistrix } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import styles from "./style.css";

export default function SearchBar({ setIsSearching, query, setQuery }) {
  useEffect(() => {
    if (query.length === 0) setIsSearching(false);
  }, [query]);

  return (
    <div className="searchBarContainer">
      <FaSistrix />
      <Form method="post" onSubmit={() => setIsSearching(true)}>
        <input
          type="text"
          name="query"
          className="searchbar"
          placeholder="Find notes faster by searching"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
        <button type="submit" className="searchButton">
          Search
        </button>
      </Form>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
