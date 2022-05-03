import React from 'react';
import SayerCard from '../../components/sayerCard';

const SayersList = ({sayersList}) => {
    return (
        <>
            {sayersList.map(sayer=>
                <SayerCard key={sayer._id} sayerId={sayer._id} name={sayer.source} picPath={require("../../"+sayer.picture)}/>
            )}
        </>
    );
};

export default SayersList;