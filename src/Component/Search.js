import React, { useContext } from "react";
import "../Card.css";
import { Appcontext } from "./Context";
const Search = () => {
  const { search, setSearch} = useContext(Appcontext);
  const change = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <>
      <form onSubmit={change}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Search;
