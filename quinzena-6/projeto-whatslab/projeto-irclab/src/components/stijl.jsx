import React from "react";
import styled from "styled-components";

export const SendButton = styled.button`
    border: 0;
    padding: '6px 12px';
    background-color: '#8257e6';
    :hover {
        background-color: #828282;
    };
`

export const Head = styled.div`
    display: 'flex';
    background-color: '#121214';
    align-items: center;
    min-height: '10vh';
    min-width: '100vw';
    justify-content: 'center';
    border: '3px solid purple';
    padding: 10;

`

export const Main = styled.div`
    display: 'flex';
    flex-direction: 'column';
    margin-left: '30%';
    min-height: '80vh';
    max-width: '40vw';
    color: '#e1e1f6';
    align-items: 'baseline';
    justify-content: 'center';
    border: '2px solid purple';
    padding: 10;
    
`