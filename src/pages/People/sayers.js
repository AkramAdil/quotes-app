import React from 'react';
import { useTranslation } from 'react-i18next';

import SayerCard from '../../components/sayerCard';
import styled from "styled-components";
export const SayersContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Sayers = ({sayers}) => {

    const {i18n} = useTranslation()
    
    const sayersList = sayers.map(sayer=>{
        if(i18n.language==='ar') {
            return({
                _id:sayer._id,
                name: sayer.ar_name,
                pic: sayer.picture
            })
        } else {
            return({
                _id:sayer._id,
                name: sayer.en_name,
                pic: sayer.picture
            }) 
        }
    })

    return (
        <SayersContainer>
            {sayersList.map(speaker=>
                <SayerCard key={speaker._id} sayerId={speaker._id} name={speaker.name} picPath={require('../../'+speaker.pic)}/>
            )}
        </SayersContainer>
    );
};

export default Sayers;