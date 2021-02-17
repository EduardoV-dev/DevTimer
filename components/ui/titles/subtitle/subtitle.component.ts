import styled, { css } from 'styled-components';

interface Props {
  uppercase?: boolean;
}

export const H3 = styled.h3<Props>`
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${({theme: { dark }}) => dark};

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
`;