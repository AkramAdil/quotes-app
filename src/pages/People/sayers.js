import React, { useEffect, useState } from 'react';
import SayerCard from '../../components/sayerCard';
import styled from "styled-components";
export const SayersContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Sayers = () => {
    const [speakers,setSpeakers] = useState()
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/sayers")
        .then(data=>data.json())
        .then(results=>setSpeakers(results))
    },[])
    return (
        <SayersContainer>
            {speakers?speakers.map(speaker=>
                <SayerCard key={speaker._id} sayerId={speaker._id} name={speaker.source} picPath={require('../../'+speaker.picture)}/>
            ):"جاري التحميل"}
        </SayersContainer>
    );
};

export default Sayers;