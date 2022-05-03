import React from 'react';
import styled from "styled-components";
const Button = styled.button`
outline: none;
position: relative;
background: none;
padding: 10px;
width: 90%;
margin: 3px;
border: #158467 2px solid;
border-radius: 0px;
color: #158467;
top: 80px;
margin-top: 32px;
font-size: 14px;
font-family: 'Cairo', sans-serif;
&:hover {
    transition: all 0.2s ease-in;
    color: #FFF;
    background-color: #158467;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    top: 50px;
    width: 80px;
}
`
const MainButton = ({children,getNext,getPrev}) => {

    return (
        <Button onClick={getNext||getPrev}>{children}</Button>
    );
};

export default MainButton;