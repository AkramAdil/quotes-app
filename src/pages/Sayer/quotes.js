import React from 'react';
import styled from 'styled-components'
import { useTranslation } from "react-i18next";
export const QuoteBox = styled.div`
    margin-top: 40px;
    text-align: start;
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
    const {t,i18n} = useTranslation()
    const quotesList = (i18n.language==="ar")?{'quotes':quotes.ar_quotes}:{'quotes':quotes.en_quotes}
    return (
        <QuoteBox className="quotes">
            <h2>{t("quotesSetction")} :</h2>

            {quotes?quotesList.quotes.map((singleQuote,i)=>
                <QuoteText key={i}>{singleQuote}</QuoteText>
            ):"جاري التحميل"}
            
        </QuoteBox>
    );
};

export default Quotes;