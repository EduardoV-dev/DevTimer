import styled from 'styled-components';

export const H1 = styled.h1<{}>`
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  color: ${({ theme: { primary } }) => primary};
  user-select: none;
`;