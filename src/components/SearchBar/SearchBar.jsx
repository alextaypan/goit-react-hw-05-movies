import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import s from "./SearchBar.module.css";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleNameChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast.error(
        "The search string cannot be empty. Please specify your search query!"
      );
    }

    onSubmit(query);

    setQuery("");
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.searchFormButton}>
        <FaSearch className={s.reactIcon} />
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleNameChange}
      />
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
