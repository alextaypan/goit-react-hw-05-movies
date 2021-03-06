import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";

import s from "./SearchForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchInput = (e) => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast.warn(
        "The search string cannot be empty. Please specify your search query!"
      );
    }

    onSearch(query);

    setQuery("");
  };

  return (
    <div className={s.wrapp}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <FaSearch className={s.reactIcon} />
        </button>
        <input
          className={s.input}
          type="text"
          value={query}
          autoFocus
          onChange={handleSearchInput}
          autoComplete="off"
          placeholder="Search movies"
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
