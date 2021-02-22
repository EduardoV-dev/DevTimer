import styled from 'styled-components'

interface Props {

}

export const Link = styled.a<Props>`
  font-size: 1rem;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};

  &:hover {
    text-decoration: underline;
  }
`;