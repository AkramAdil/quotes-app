import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
const SearchBox = styled.div`
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 768px) {
            justify-content: center;
        }
    `
const SearchBar = styled.input`
        width: 400px;
        padding: 25px;
        border: none;

        direction: rtl;
        font-size: 20px;
        font-family: 'Cairo', sans-serif;
        &:focus {
            border: none;
            outline: none;
        }
    `
const Search = () => {
    const history = useNavigate()
    const [searchTerm, setSearchTerm] = useState()
    const search = function (e) {
        e.preventDefault()
        history(`/search?searchTerm=${searchTerm}`)

    }
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }
    return (
        <SearchBox className="search">
            <form onSubmit={search}>
                <div style={{border: '#158467 solid 3px',marginTop: '20px'}}>
                    <i className="ri-search-line" style={{color: '#158467', fontSize: '20px', marginLeft:'5px'}}></i>
                    <SearchBar type="text" placeholder="اكتب جزء من الاقتباس او الناطق" onChange={handleSearch}/>
                </div>
            </form>
        </SearchBox>
    );
};

export default Search;