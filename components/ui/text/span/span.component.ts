import styled, { css } from 'styled-components'
import { Avatar, Bold, Titles } from '../../../../models/interfaces/components';
import { Boolean, TaskStatusType } from '../../../../models/types/components';

interface Props extends Avatar, Titles, Bold {
  fontFamily?: 'Raleway' | 'Montserrat';
  fontColor?: string;
  type?: TaskStatusType;
  badge?: Boolean;
  badgeActive?: Boolean;
}

export const SpanComp = styled.span<Props>`
  display: inline-block;
  font-family: ${({ fontFamily }) => fontFamily || 'Raleway'}, 
  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ fontColor, theme }) => fontColor || theme.dark};
  font-weight: ${({ bold }) => bold === 'false' ? 'regular' : 'bold'};

  ${({ type }) => type === 'total' && css`
    text-decoration: underline;
  `};

  ${({ type }) => type === 'todo' && css`
    color: ${({ theme }) => theme.todo};
  `};

  ${({ type }) => type === 'progress' && css`
    color: ${({ theme }) => theme.secondary};
  `};

  ${({ type }) => type === 'completed' && css`
    color: ${({ theme }) => theme.primary};
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