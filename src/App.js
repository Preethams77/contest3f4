import React from 'react'
import Search from "./components/Search/Search"; 
import Card from "./components/Card/Card";
import "./App.css";
const App = () => {
  return (
    <div className="name">Movies App <br/><br/>
     Search For Movies By Their Title
    <Search/>
    <button>Search Now!</button>
      </div>
  )
}

export default App