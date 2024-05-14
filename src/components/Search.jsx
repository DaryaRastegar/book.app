import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

function Search({search, setSearch, searchHandler}) {
  return (
    <div>
        <input type="text " placeholder="Enter title"  value= {search} onChange={(e) => setSearch(e.target.value.toLowerCase()) }/>
        <button onClick={searchHandler}><IoSearchSharp /></button>
      </div>
  )
}

export default Search