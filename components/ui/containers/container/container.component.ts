import styled, { css } from 'styled-components';

interface Props {
  wrapper?: boolean;
  bgColor?: string;
}

export const Div = styled.div<Props>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};

  ${({ wrapper }) => wrapper && css`
    padding: 0 1rem;
    max-width: 75rem;
    margin: 0 auto;
  `};
`;