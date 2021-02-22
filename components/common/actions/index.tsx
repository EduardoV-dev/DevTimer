import React from 'react';
import { P } from '../../ui';

interface Props {
  children: (string | JSX.Element)[] | JSX.Element;
  text: string;
  className?: string;
}

const Actions: React.FC<Props> = ({
  children,
  text,
  className,
}): JSX.Element => {
  return (
    <>
      {children}
      <P {...{ className }}>{text}</P>
    </>
  );
}

export default Actions;