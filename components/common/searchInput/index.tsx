import React from 'react';
import { Boolean } from '../../../models/types/components';
import { SearchIcon } from '../../icons';
import { Container, Input } from '../../ui';
import s from './searchInput.module.scss';

interface Props {
  placeholder: string;
  noStyled?: Boolean;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  noStyled,
}): JSX.Element => {
  return (
    <Container
      bgColor={({ theme }) => theme.lightDarken}
      className={s.searchInput}
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