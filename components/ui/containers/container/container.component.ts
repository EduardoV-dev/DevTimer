import styled, { css } from 'styled-components';
import { Boolean } from '../../../../models/types/components';

interface Props {
  card?: Boolean;
  bgColor?: string;
}

export const Div = styled.div<Props>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};

  ${({ card }) => card && css`
    background-color: ${({ theme }) => theme.light};
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 1rem;
  `};
`;