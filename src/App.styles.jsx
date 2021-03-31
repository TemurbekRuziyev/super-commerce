import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  width: 65%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 5.5vw 1fr;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 2px 4px rgba(255, 255, 255, 0.192);


`;

export const ContentContainer = styled.div`
  grid-column: 2 / 3;
  background-color: ${props => props.bgColor[0]};
  color: ${props => props.bgColor[2]};
`;

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.25%; //1rem = 10px
    }

    body {
        font-family: "Abel", "Rubik", sans-serif;
        background-color: rgba(0, 0, 0, 1);
    }
`;
