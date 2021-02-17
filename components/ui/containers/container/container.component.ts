import styled, { css } from 'styled-components';

interface Props {
  width?: string;
  wrapper?: boolean;
  bgColor?: string;
  borderRadius?: string;
  padding?: string;
}

export const Div = styled.div<Props>`
  width: ${({ width }) => width || '100%'};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  padding: ${({ padding }) => padding || 0};
  margin: 0 auto;

  ${({ wrapper }) => wrapper && css`
    padding: 0 1rem;
    max-width: 75rem;
    margin: 0 auto;
  `};
`;