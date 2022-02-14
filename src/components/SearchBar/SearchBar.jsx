import { toast } from "react-toastify";
import { useState } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

export const Searchbar = ({ changeSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.warn(
        "The search string cannot be empty. Please specify your search query!"
      );
      return;
    }
    changeSearch(query);
    setQuery("");
  };

  return (
    <>
      {/* <header className={s.searchBar}> */}
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchFormBtn}>
          Search
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      {/* </header> */}
    </>
  );
};

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};
