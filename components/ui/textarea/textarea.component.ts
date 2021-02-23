import styled from 'styled-components'

interface Props {

}

export const TextArea = styled.textarea<Props>`
  min-width: 100%;
  max-width: 100%;
  min-height: 6.25rem;
  max-height: 12.5rem;
  line-height: 1.3;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.lightDarken};
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
`;