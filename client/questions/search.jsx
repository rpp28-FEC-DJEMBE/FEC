import React from 'react';

const Search = ({handleSearch}) => {

  return (
    <form  className="search">
      <input
        className="qaSearch"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {handleSearch(e.target.value)}}></input>
    </form>
    )
}

export default Search;