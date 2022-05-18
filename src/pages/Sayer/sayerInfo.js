import React from 'react';
import styled from 'styled-components'

const InfoContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
    @media screen and (max-width: 768px) {
        justify-items: center;
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto auto; 
    }
`
const SayerPic = styled.img`
    grid-area: 1 / 2 / 3 / 3;
    width: 100%;
    height: 530px;
    @media screen and (max-width: 992px) {
        width: 390px;
        height: 440px;
    }
    @media screen and (max-width: 768px) {
        grid-area: 1 / 1 / 2 / 2; 
    }
`
const AboutSayer = styled.p`
grid-area: 2 / 1 / 3 / 2;
margin-right: 20px;
font-size: 18px;
@media screen and (max-width: 768px) {
    grid-area: 3 / 1 / 4 / 2;
}
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