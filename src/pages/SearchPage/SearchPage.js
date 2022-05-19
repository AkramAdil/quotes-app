import React, { useState, useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import SayersList from './sayersList';
import Header from '../../components/header';
import Search from '../../components/search';
import {SayersContainer} from '../People/sayers'
import styled from 'styled-components'
import QuotesList from './quotesList';
import Spinner from '../../components/Spinner';
const SearchPage = () => {
    const [searchResults, setSearchResults] = useState()
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        fetch(`https://arquote-backend.herokuapp.com/search?searchTerm=${searchParams.get('searchTerm')}`)
        .then(data=>data.json())
        .then(results=>setSearchResults(results))
    },[searchParams])

const SearchMsg = styled.p`
    color: #158467;
    font-size: 18px;
    text-align: center;
`
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
                    searchResults?(searchResults.targetSayers.length!==0?(
                        <SayersList sayersList={searchResults.targetSayers}/>
                    ):<SearchMsg>لا يوجد أشخاص بهذا الاسم <i className="ri-error-warning-line"></i></SearchMsg>)
                    :<Spinner/>
                }
            </SayersContainer>
            <ListHead>الاقتباسات:</ListHead>
            {searchResults?(searchResults.targetQuotes.length!==0?(
                <QuotesList quotesList={searchResults.targetQuotes}/>
            ):<SearchMsg>لا يوجد اقتباسات تحتوي هذه الكلمة <i className="ri-error-warning-line"></i></SearchMsg>
            ):<Spinner/>
            }
        </div>
    );
};

export default SearchPage;