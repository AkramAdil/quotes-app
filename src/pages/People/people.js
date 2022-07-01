import React, {useState,useEffect} from 'react';
import Header from '../../components/header';
import Search from "../../components/search";
import Sayers from './sayers';
import Spinner from '../../components/Spinner';

const People = () => {
    const [sayers,setSayers] = useState()
    useEffect(()=>{
        fetch("https://ar-quotes.herokuapp.com/sayers")
        .then(data=>data.json())
        .then(results=>setSayers(results))
    },[])
    return (
        <div className="container">
            <Header/>
            <Search/>
            {sayers?<Sayers sayers={sayers}/>:<Spinner/>}
        </div>
    );
};

export default People;