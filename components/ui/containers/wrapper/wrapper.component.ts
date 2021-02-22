import styled from 'styled-components';

export const Div = styled.div<{}>`
  width: 90%;
  padding: 0 1rem;
  max-width: 75rem;
  margin: 0 auto; 

  @media screen and (min-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;