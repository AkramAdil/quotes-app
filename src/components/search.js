import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "./search.css"
    const Search = () => {
    const {t, i18n} = useTranslation()

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
        <div className="search">
            <form onSubmit={search}>
                <div style={{border: '#158467 solid 3px',marginTop: '20px'}}>
                    <input className='searchBar' type="text" placeholder={t("searchPlaceholder")} onChange={handleSearch}/>
                    <i className={(i18n.language==="ar")?"ri-search-line icon":"ri-search-line icon en-icon"}></i>
                </div>
            </form>
        </div>
    );
};

export default Search;