import React from 'react';
import {QuoteText,QuoteBox} from '../Sayer/quotes'
const QuotesList = ({quotesList}) => {
    return (
        <>
                <QuoteBox>

            {
                quotesList.map(quote=>
                    <QuoteText key={quote._id}>{quote.quote}</QuoteText>    
                )
            }
                </QuoteBox>
        </>
    );
};

export default QuotesList;