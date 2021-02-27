import React from 'react';
import { Container } from '../../ui';
import s from './backdrop.module.scss';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const BackDrop: React.FC<Props> = ({
  onClick,
}): JSX.Element => {

  return (
    <Container
      className={s.backdrop}
      bgColor='rgba(51, 51, 51, 0.7)'
      onClick={onClick}
    />
  );
}

export default BackDrop;