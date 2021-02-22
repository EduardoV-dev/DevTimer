import styled, { css } from 'styled-components';
import { Bold } from '../../../../models/interfaces/components';

export const P = styled.p<Bold>`
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.dark};

  ${({ bold }) => bold && css`
    font-weight: bold;
  `};
`;