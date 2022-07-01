import React from 'react';
import { useTranslation } from 'react-i18next';
import PersonalPicture from './PersonalPicture';
import NavigateQuotes from './NavigateQuotes';
import Quote from './Quote';
import "./content.css"
const Content = ({randomeQuote, getNext, getPrev}) => {
    const {t, i18n} = useTranslation()
    //,'source':{source:randomeQuote.source, _id: randomeQuote._id}
    const quote = (i18n.language=="ar")?
    {_id:randomeQuote.source._id,'quoteText':randomeQuote.ar_quote,'name':randomeQuote.source.ar_name,picture:randomeQuote.source.picture}:{_id:randomeQuote.source._id,'quoteText':randomeQuote.en_quote,'name':randomeQuote.source.en_name,picture:randomeQuote.source.picture}       
    
    return (
        <div className="main-content">
           <PersonalPicture picPath={require("../../../"+quote.picture)}/>
            <Quote quoteText={quote.quoteText} name={quote.name} sayerID={quote._id}/>
            <NavigateQuotes getNext={getNext} getPrev={getPrev}/>            
        </div>
    );
};

export default Content;