import styled, { css } from 'styled-components'
import { Avatar } from '../../../../models/interfaces/components';

export const SpanComp = styled.span<Avatar>`
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;

  ${({ avatar }) => avatar && css`
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  `};
`;