import React from 'react';
import { Boolean } from '../../../models/types/components';
import { SearchIcon } from '../../icons';
import { Container, Input } from '../../ui';
import cn from 'classnames';
import s from './searchInput.module.scss';

interface Props {
  placeholder: string;
  noStyled?: Boolean;
  className?: string;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  noStyled,
  className,
}): JSX.Element => {
  const classNames = cn(s.searchInput, className);

  return (
    <Container
      bgColor={({ theme }) => theme.lightDarken}
      className={classNames}
    >
      <SearchIcon
        width={32}
        height={32}
      />
      <Input type='text' {...{ placeholder, noStyled }} />
    </Container>
  );
}

export default SearchInput;