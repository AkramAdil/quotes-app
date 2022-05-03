import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/header';
import Search from '../../components/search';
import SayerInfo from './sayerInfo';
import Quotes from './quotes';
const Sayer = () => {
    let params = useParams()
    const [SayerData, setSayerData] = useState()
    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/sayer/${params.id}`)
        .then(data=>data.json())
        .then(results=>setSayerData(results))
    },[params.id])

    return (
        <div className="container">
            <Header/>
            <Search/>
            {SayerData?<SayerInfo name={SayerData.source} info={SayerData.about} picPath={require('../../'+SayerData.picture)}/>
            :"جاري التحميل"}
            {SayerData?<Quotes quotes={SayerData.quotes}/>:"جاري التحميل"}
        </div>
    );
};

export default Sayer;