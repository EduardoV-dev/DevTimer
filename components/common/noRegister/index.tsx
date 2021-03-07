import React from 'react';
import { TodoListIcon } from '../../icons';
import { P, Span, Wrapper } from '../../ui';
import s from './noRegister.module.scss';

interface Props {
  pText: string;
  spanText: string;
}

const NoRegister: React.FC<Props> = ({
  pText,
  spanText,
}): JSX.Element => {
  return (
    <Wrapper className={s.noRegister}>
      <P className={s.noRegister_message}>
        {pText} <Span>{spanText}</Span>
      </P>
      <TodoListIcon width={64} height={64} />
    </Wrapper>
  );
}

export default NoRegister;