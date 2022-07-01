import React, { useState, useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next"
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
    const {t} = useTranslation()

    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/search?searchTerm=${searchParams.get('searchTerm')}`)
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
    font-weight: bold;
    margin-top: 15px
`
    return (
        <div className='container'>
            <Header/>
            <Search/>
            <ListHead>{t("peopleSection")}:</ListHead>
            <SayersContainer>
                {
                    searchResults?(searchResults.targetSayers.length!==0?(
                        <SayersList sayersArray={searchResults.targetSayers}/>
                    ):<SearchMsg><i className="ri-error-warning-line"></i> {t("authorsMsg")}</SearchMsg>)
                    :<Spinner/>
                }
            </SayersContainer>
            <ListHead>{t("quotesSetction")}:</ListHead>
            {searchResults?(searchResults.targetQuotes.length!==0?(
                <QuotesList quotesArray={searchResults.targetQuotes}/>
            ):<SearchMsg dir="auto"><i className="ri-error-warning-line"></i> {t("quotesMsg")}</SearchMsg>
            ):<Spinner/>
            }
        </div>
    );
};

export default SearchPage;