import React from 'react';
import { Container } from '../../ui';
import cn from 'classnames';
import s from './backdrop.module.scss';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const BackDrop: React.FC<Props> = ({
  onClick,
  className,
}): JSX.Element => {
  const classNames = cn(s.backdrop, className);

  return (
    <Container
      className={classNames}
      bgColor='rgba(51, 51, 51, 0.7)'
      onClick={onClick}
    />
  );
}

export default BackDrop;