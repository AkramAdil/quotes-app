import React from 'react';
import styled from 'styled-components'

export const QuoteBox = styled.div`
    margin-top: 40px;
    direction: rtl;
    text-align: right;
`
export const QuoteText = styled.p`
    width: 100%;
    margin: 5px;
    margin-right: 0;
    border: #158467 2px solid;
    padding: 15px;
    border-radius: 0;
    font-size: 16px;
    font-weight: 800;
    &:hover {
        transition: 0.5s;
        border-color: #065446;
        background-color: #065446;
        color: #FFF;
        cursor: pointer;
    }
` 
const Quotes = ({quotes}) => {
    return (
        <QuoteBox className="quotes">
            <h2>اقتباسات :</h2>

            {quotes?quotes.map((singleQuote,i)=><QuoteText key={i}>{singleQuote}</QuoteText>):"جاري التحميل"}
            
        </QuoteBox>
    );
};

export default Quotes;