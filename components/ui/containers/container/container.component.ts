import styled from 'styled-components';

interface Props {
  bgColor?: string;
}

export const Div = styled.div<Props>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;