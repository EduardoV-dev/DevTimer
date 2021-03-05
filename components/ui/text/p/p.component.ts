import styled, { css } from 'styled-components';
import { Bold } from '../../../../models/interfaces/components';

interface Props extends Bold {
  fontColor?: any;
}

export const P = styled.p<Props>`
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme, fontColor }) => fontColor || theme.dark};
  line-height: 1.3;

  ${({ bold }) => bold && css`
    font-weight: bold;
  `};
`;