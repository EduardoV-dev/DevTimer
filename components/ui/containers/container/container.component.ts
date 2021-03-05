import styled, { css } from 'styled-components';
import { Boolean } from '../../../../models/types/components';

interface Props {
  card?: Boolean;
  bgColor?: string;
  center?: Boolean;
}

export const Div = styled.div<Props>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};

  ${({ card }) => card && css`
    height: 100%;
    background-color: ${({ theme }) => theme.light};
    margin: 0 auto;
    border-radius: 5px;
    padding: 1rem;
  `};

  ${({ center }) => center && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;