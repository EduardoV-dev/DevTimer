import React from 'react';
import { Container, Headline } from '../../ui';
import { LogoIcon } from '../../icons';
import cn from 'classnames';
import s from './logo.module.scss';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }): JSX.Element => {
  const classNames = cn(s.logo, className);

  return (
    <Container className={classNames}>
      <LogoIcon
        width={64}
        height={64}
      />
      <Headline className={s.logo_headline}>DevTimer</Headline>
    </Container>
  );
}

export default Logo;