import styled from 'styled-components';

export const HomePageCollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props =>
      props.likes.length <= 2
        ? `${props.likes.length}, 27rem`
        : `auto-fit, minmax(25rem, 1fr)`}
  );
`;
