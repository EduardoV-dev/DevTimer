import styled from 'styled-components';

interface Props {
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
}

export const Image = styled.img<Props>`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
`;