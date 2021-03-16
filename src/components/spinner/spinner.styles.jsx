import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
`;

export const SpinnerContainer = styled.div`
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    border: 3px solid transparent;
    border-top: 3px solid black;
    background-color: white;
    animation: anima 1s linear infinite;

    @keyframes anima {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;