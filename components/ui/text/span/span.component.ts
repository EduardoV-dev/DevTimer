import styled, { css } from 'styled-components'
import { Avatar, Titles } from '../../../../models/interfaces/components';
import { TaskStatusType } from '../../../../models/types/components';

interface Props extends Avatar, Titles {
  type?: TaskStatusType;
}

export const SpanComp = styled.span<Props>`
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
`;