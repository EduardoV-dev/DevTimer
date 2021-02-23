import styled, { css } from 'styled-components'
import { Boolean } from '../../../models/types/components';

interface Props {
  noStyled?: Boolean;
}

export const Input = styled.input<Props>`
  display: block;
  width: 100%;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.lightDarken};
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;

  ${({ noStyled }) => noStyled && css`
    background-color: transparent;
    border-radius: 0;
  `};
`;