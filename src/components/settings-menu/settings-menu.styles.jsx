import styled, {css} from 'styled-components';

const sameStyle = css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
`;

export const SettingsContainer = styled.div`
    display: flex;
    position:relative;
    border-radius: 5px;
    background-color: #ccc;

`;

export const SettingsOne = styled.div`
    ${sameStyle}
    background-color: black;
`;

export const SettingsTwo = styled.div`
    ${sameStyle}
    background-color: white;
`;

export const SettingsThree = styled.div`
    ${sameStyle}
    background-color: green;
`;