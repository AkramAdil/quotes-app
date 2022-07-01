import React from 'react';
import MainButton from '../../../components/mainButton';
import { useTranslation } from 'react-i18next';

const NavigateQuotes = ({getNext,getPrev}) => {
    const {t} = useTranslation()

    return (
        <div className="other-quote">
            <MainButton getPrev={getPrev}>&#8680; {t("prevBtn")}</MainButton>
            <MainButton getNext={getNext}>{t("nextBtn")} &#8678;</MainButton>
        </div>
    );
};

export default NavigateQuotes;