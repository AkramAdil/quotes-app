import React, { useState,useEffect } from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import Content from './components/content';
import "./homeStyle.css"
const Home = () => {
    const [randomeQuote, setRandomeQuote] = useState()

    useEffect(()=>{
        fetch('http://127.0.0.1:5000/random')
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    },[])
    const getNext = function(e) {
        fetch(`http://127.0.0.1:5000/random/?nexId=${Number(randomeQuote.index)+1}`)
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    }
    const getPrev = function(e) {
        fetch(`http://127.0.0.1:5000/random/?prevId=${Number(randomeQuote.index)-1}`)
        .then(data=>data.json())
        .then(results=>setRandomeQuote(results))
    }
    return (
        <div className="container">
            <Header/>
            <Search/>
            {randomeQuote?<Content quote={randomeQuote} getNext={getNext} getPrev={getPrev}/>:"جاري التحميل"}
        </div>
    );
};

export default Home;