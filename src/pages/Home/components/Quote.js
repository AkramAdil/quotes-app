import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Quote = ({quoteText,name,sayerID}) => {
    const {t, i18n} = useTranslation()
    return (
        <div className={i18n.language=="en"?"quote quote-en":"quote"}>
            <div className="paragraph">
                <p id="quote-paragraph">{quoteText}</p>
            </div>
            <Link to={"/sayer/"+sayerID} className="source" id="source">-{name}</Link>
        </div>
    );
};

export default Quote;