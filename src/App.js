import React, { useState, useMemo } from 'react';
import { Route,Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home/home';
import People from './pages/People/people';
import Sayer from './pages/Sayer/sayer';
import About from './pages/About/about';
import SearchPage from './pages/SearchPage/SearchPage';

import SearchContext from "./components/SearchContext"
function App() {
  const [searchResults, setSearchResults] = useState()
  const value = useMemo(()=>({searchResults,setSearchResults}),[searchResults,setSearchResults])
  return (
    <div className="App">
      <SearchContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/sayer/:id" element={<Sayer/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>   
      </SearchContext.Provider>
    </div>
  );
}

export default App;
