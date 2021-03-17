import styled from 'styled-components'

interface Props {

}

export const Select = styled.select<Props>`
  appearance: none;
  display: block;
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.lightDarken};
`;