import styled, { css } from 'styled-components'
import { Avatar, Titles } from '../../../../models/interfaces/components';
import { Boolean, TaskStatusType } from '../../../../models/types/components';

interface Props extends Avatar, Titles {
  type?: TaskStatusType;
  badge?: Boolean;
  badgeActive?: Boolean;
}

export const SpanComp = styled.span<Props>`
  display: inline-block;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ theme }) => theme.primary};
  font-weight: bold;

  ${({ avatar }) => avatar && css`
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  `};

  ${({ type }) => type === 'total' && css`
    text-decoration: underline;
    color: ${({ theme }) => theme.dark};
  `};

  ${({ type }) => type === 'todo' && css`
    color: ${({ theme }) => theme.todo};
  `};

  ${({ type }) => type === 'progress' && css`
    color: ${({ theme }) => theme.secondary};
  `};

  ${({ type }) => type === 'completed' && css`
    text-decoration: line-through;
  `};

  ${({ badge }) => badge && css`
    display: inline-block;
    color: ${({ theme }) => theme.primary};
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    cursor: default;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.light};
    }
  `};

  ${({ badgeActive }) => badgeActive && css`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
  `};
`;