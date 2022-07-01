import React from 'react';
import SayerCard from '../../components/sayerCard';
import { useTranslation } from 'react-i18next';

const SayersList = ({sayersArray}) => {
    const {i18n} = useTranslation()
    const sayersList = sayersArray.map(sayer=>{
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
        <>
            {sayersList.map(sayer=>
                <SayerCard key={sayer._id} sayerId={sayer._id} name={sayer.name} picPath={require("../../"+sayer.pic)}/>
            )}
        </>
    );
};

export default SayersList;