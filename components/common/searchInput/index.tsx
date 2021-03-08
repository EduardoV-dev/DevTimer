import React from 'react';
import { Boolean } from '../../../models/types/components';
import { SearchIcon } from '../../icons';
import { Container, Input } from '../../ui';
import cn from 'classnames';
import s from './searchInput.module.scss';
import { OnChange } from '../../../models/types/events';

interface Props {
  placeholder: string;
  noStyled?: Boolean;
  className?: string;
  onChange?: (e: OnChange) => void;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  noStyled,
  className,
  onChange,
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
      <Input
        type='text'
        {...{
          placeholder,
          noStyled,
          onChange,
        }} />
    </Container>
  );
}

export default SearchInput;