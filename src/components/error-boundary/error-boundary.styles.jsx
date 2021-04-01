import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #161616;
`;

export const ErrorBoundaryImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
`;

export const ErrorBoundaryText = styled.h2`
color: white;
font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
`;