import React from 'react';
import { Link } from 'react-router-dom';

const Quote = ({quoteText,name,sayerID}) => {
    return (
        <div className="quote">
            <div className="paragraph">
                <p id="quote-paragraph">{quoteText}</p>
            </div>
            <Link to={"/sayer/"+sayerID} className="source" id="source">-{name}</Link>
        </div>
    );
};

export default Quote;