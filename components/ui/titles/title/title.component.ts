import styled, { css } from 'styled-components';

interface Props {
  uppercase?: boolean;
}

export const H2 = styled.h2<Props>`
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: ${({theme: { dark }}) => dark};

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
`;