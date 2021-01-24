import {React, useContext} from "react";
import "../public/styles.css";
import UserContext from "../util/UserContext";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search() {
  const {search, searchUsers, handleSearch} = useContext(UserContext);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search for values in any column:</label>
        <input
          value={search}
          onChange={handleSearch} 
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="What are you looking for?"
          id="term"
        />
        <small id="passwordHelpBlock" className="form-text text-muted">
          * Addresses are case sensitive
        </small>
      </div>
      <button type="button" onClick={searchUsers} className="btn btn-primary ml-2 mb-4 mt-2">Search</button>
    </form>
  );
}

export default Search;
