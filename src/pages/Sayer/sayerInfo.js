import React from 'react';
import styled from 'styled-components'

const InfoContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: 220px auto;
    direction: rtl;
`
const SayerPic = styled.img`
    grid-row-start: 1;
    grid-row-end: 3;
    width: 480px;
    height: 530px;
`
const AboutSayer = styled.p`
grid-column-start: 2;
margin-right: 20px;
font-size: 18px;
`

const SayerInfo = ({name,info,picPath}) => {
    return (
        <InfoContainer className="sayer-info">
            <SayerPic className="personal-picture" src={picPath} alt="صورة شخصية"/>
            <h2 className="name" style={{marginRight:"20px"}}>{name}</h2>
            <AboutSayer className="about">
                {info}
            </AboutSayer>
        </InfoContainer>
    );
};

export default SayerInfo;