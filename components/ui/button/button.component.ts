import styled, { css } from 'styled-components';
import { ButtonProps } from '../../../models/interfaces/components';

export const Btn = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: ${({ theme: { light } }) => light};
  font-weight: bold;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  ${({ primary }) => primary && css`
    background-color: ${({ theme: { primary } }) => primary};
  `}

  ${({ github }) => github && css`
    background-color: ${({ theme: { dark } }) => dark};
  `}

  ${({ facebook }) => facebook && css`
    background-color: ${({ theme: { facebook } }) => facebook};
  `}
`;