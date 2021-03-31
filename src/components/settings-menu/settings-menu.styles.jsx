import styled, {css} from 'styled-components';

const sameStyle = css`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: .2rem .5rem;
`;

export const SettingsContainer = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: #ccc;
    z-index: -1;
`;

export const SettingsOne = styled.div`
    ${sameStyle}
    background-color: #000000;
`;

export const SettingsTwo = styled.div`
    ${sameStyle}
    background-color: #fdc403;
`;

export const SettingsThree = styled.div`
    ${sameStyle}
    background-color: #8062ff;
`;