import styled, { css } from 'styled-components';
import { ButtonProps } from '../../../models/interfaces/components';

export const Btn = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.lightDarken};
  color: ${({ theme, fontColor }) => fontColor || theme.light};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}; 

  ${({ primary }) => primary && css`
    background-color: ${({ theme: { primary } }) => primary};

    &:hover,
    &:focus {
      background-color: ${({ theme: { primaryHover } }) => primaryHover};
    }

    &:active {
      box-shadow: 0px 0px 0 2px ${({ theme: { primary } }) => primary};
    }
  `}

  ${({ github }) => github && css`
    background-color: ${({ theme: { dark } }) => dark};

    &:hover,
    &:focus {
      background-color: ${({ theme: { darkHover } }) => darkHover};
    }

    &:active {
      box-shadow: 0px 0px 0 2px ${({ theme: { dark } }) => dark};
    }
  `}

  ${({ facebook }) => facebook && css`
    background-color: ${({ theme: { secondary } }) => secondary};

    &:hover,
    &:focus {
      background-color: ${({ theme: { secondaryHover } }) => secondaryHover};
    }

    &:active {
      box-shadow: 0px 0px 0 2px ${({ theme: { secondary } }) => secondary};
    }
  `}

  ${({ danger }) => danger && css`
    background-color: ${({ theme }) => theme.danger};

    &:hover,
    &:focus {
      background-color: ${({ theme: { dangerHover } }) => dangerHover};
    }

    &:active {
      box-shadow: 0px 0px 0 2px ${({ theme: { danger } }) => danger};
    }
  `};
`;