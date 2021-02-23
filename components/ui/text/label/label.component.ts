import styled from 'styled-components'

interface Props {

}

export const Label = styled.label<Props>`
  display: block;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.dark};
  font-weight: bold;
`;