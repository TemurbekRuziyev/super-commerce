import styled from 'styled-components';

export const HomePageContainer = styled.div`
  padding: 1rem;
  position: relative;
`;

export const HomePageHeading = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 2.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  background-color: ${props => props.bgColor[3]};
  color: transparent;
`;

export const FavoriteProducts = styled.div``;

export const BuyScheduleContainer = styled.div`
  margin-top: 4rem;
`;

export const HomePageText = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
`;

export const ScheduleContainer = styled.div``;

export const FavoriteProductsList = styled.div``;
