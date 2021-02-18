import styled, { css } from 'styled-components';
import { Titles } from '../../../../models/interfaces/components';

export const H3 = styled.h3<Titles>`
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${({theme: { dark }}) => dark};

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
`;