import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  width: 65%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 5.5vw 1fr;
  background-color: #67778b;
  border-radius: 5px;
  overflow: hidden;
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
