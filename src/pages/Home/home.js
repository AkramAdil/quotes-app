import React, { useState,useEffect } from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import Content from './components/content';
import "./homeStyle.css"
import Spinner from "../../components/Spinner"
const Home = () => {
    const [randomeQuote, setRandomeQuote] = useState()

    useEffect(()=>{
        fetch('https://arquote-backend.herokuapp.com/random')
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    },[])
    const getNext = function(e) {
        fetch(`https://arquote-backend.herokuapp.com/random/?nexId=${Number(randomeQuote.index)+1}`)
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    }
    const getPrev = function(e) {
        fetch(`https://arquote-backend.herokuapp.com/random/?prevId=${Number(randomeQuote.index)-1}`)
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    }
    return (
        <div className="container">
            <Header/>
            <Search/>
            {randomeQuote?<Content quote={randomeQuote} getNext={getNext} getPrev={getPrev}/>:<Spinner/>}
        </div>
    );
};

export default Home;