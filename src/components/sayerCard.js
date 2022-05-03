import React from 'react';
import styled from 'styled-components'
const SayerBox = styled.div`
    border: #158467 3px solid;
    width: 250px;
    margin: 5px 0;
    text-align: center;
    `
const Anchor = styled.a`
    text-decoration: none;
`
const SayerPic = styled.img`
    padding: 5px;
    height: 290px;
    width: 240px;
    border-radius: 0;
    `
const SayerName = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #158467
    `
const SayerCard = ({sayerId,name,picPath}) => {
    return (
        <SayerBox id={name}>
            <Anchor href={`/sayer/`+sayerId}>
                <SayerPic src={picPath} alt=""/>
                <SayerName>{name}</SayerName>
            </Anchor>
        </SayerBox>
    );
};

export default SayerCard;