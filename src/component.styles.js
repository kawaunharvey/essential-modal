import styled from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.55);
`;

export const ModalCloseButton = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;