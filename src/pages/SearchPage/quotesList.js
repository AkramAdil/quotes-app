import React from 'react';
import {QuoteText,QuoteBox} from '../Sayer/quotes'
import { useTranslation } from 'react-i18next';
const QuotesList = ({quotesArray}) => {
    const {i18n} = useTranslation()
    const quotesList = quotesArray.map(quote=>{
        if(i18n.language==='ar') {
            return({_id:quote._id,quoteText:quote.ar_quote})
        } else {
            return({_id:quote._id,quoteText:quote.en_quote})
        }
    })
    return (
        <>
                <QuoteBox>

            {
                quotesList.map(quote=>
                    <QuoteText key={quote._id}>{quote.quoteText}</QuoteText>    
                )
            }
                </QuoteBox>
        </>
    );
};

export default QuotesList;