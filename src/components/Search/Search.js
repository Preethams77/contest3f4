import React from 'react'
import "./Search.css";
const Search = ({value,onChange}) => {
  return (
    <div className='searchContainer'><input type="text" placeholder="Search" value={value} onChange={onChange}/></div>
  )//onChange function gets called
}
export default Search;