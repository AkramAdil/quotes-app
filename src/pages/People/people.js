import React from 'react';
import Header from '../../components/header';
import Search from "../../components/search";
import Sayers from './sayers';
const People = () => {
    return (
        <div className="container">
            <Header/>
            <Search/>
            <Sayers/>
        </div>
    );
};

export default People;