import React from 'react';
import MainButton from '../../../components/mainButton';

const NavigateQuotes = ({getNext,getPrev}) => {
    return (
        <div className="other-quote">
            <MainButton getPrev={getPrev}>السابق &#8680;</MainButton>
            <MainButton getNext={getNext}>&#8678; التالي</MainButton>
        </div>
    );
};

export default NavigateQuotes;