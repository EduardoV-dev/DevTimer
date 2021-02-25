import styled from 'styled-components'

interface Props {
  bgColor?: string;
}

export const Li = styled.li<Props>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;