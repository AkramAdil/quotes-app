import React, { useState, useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import SayersList from './sayersList';
import Header from '../../components/header';
import Search from '../../components/search';
import {SayersContainer} from '../People/sayers'
import styled from 'styled-components'
import QuotesList from './quotesList';
const Cusome = () => {
    const [searchResults, setSearchResults] = useState()
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/search?searchTerm=${searchParams.get('searchTerm')}`)
        .then(data=>data.json())
        .then(results=>setSearchResults(results))
    },[searchParams])


const ListHead = styled.p`
    color: #158467;
    font-size: 25px;
    direction: rtl;
    font-weight: bold;
    margin-top: 15px
`
    return (
        <div className='container'>
            <Header/>
            <Search/>
            <ListHead>القائلون:</ListHead>
            <SayersContainer>
                {
                    searchResults?(
                        <SayersList sayersList={searchResults.targetSayers}/>
                    ):"جاري التجميل"
                }
            </SayersContainer>
            <ListHead>الاقتباسات:</ListHead>
            {searchResults?(<QuotesList quotesList={searchResults.targetQuotes}/>):"جاري التجميل"}
            
        </div>
    );
};

export default Cusome;