import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/header';
import Search from '../../components/search';
import SayerInfo from './sayerInfo';
import Quotes from './quotes';
import Spinner from '../../components/Spinner';
const Sayer = () => {
    let params = useParams()
    const [SayerData, setSayerData] = useState()
    useEffect(()=>{
        fetch(`https://arquote-backend.herokuapp.com/sayer/${params.id}`)
        .then(data=>data.json())
        .then(results=>setSayerData(results))
    },[params.id])

    return (
        <div className="container">
            <Header/>
            <Search/>
            {SayerData?(
            <>
                <SayerInfo name={SayerData.source} info={SayerData.about} picPath={require('../../'+SayerData.picture)}/>
                <Quotes quotes={SayerData.quotes}/>
            </>):
            <Spinner/>}
        </div>
    );
};

export default Sayer;