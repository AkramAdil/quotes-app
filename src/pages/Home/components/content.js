import React from 'react';
import PersonalPicture from './PersonalPicture';
import NavigateQuotes from './NavigateQuotes';
import Quote from './Quote';
import "./content.css"
const Content = ({
    quote:{quote,source:{source,picture,_id}},
    getNext,
    getPrev
}) => {
    return (
        <div className="main-content">
           <PersonalPicture picPath={require("../../../"+picture)}/>
            <Quote quoteText={quote} name={source} sayerID={_id}/>
            <NavigateQuotes getNext={getNext} getPrev={getPrev}/>            
        </div>
    );
};

export default Content;