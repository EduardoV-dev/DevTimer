import styled, { css } from 'styled-components';
import { Titles } from '../../../../models/interfaces/components';

export const H2 = styled.h2<Titles>`
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: ${({theme: { dark }}) => dark};

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
`;