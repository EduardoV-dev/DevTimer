import React from 'react';
import { Container, Headline } from '../../ui';
import { LogoIcon } from '../../icons';
import s from './logo.module.scss';

interface Props {

}

const Logo: React.FC<Props> = (): JSX.Element => {
  return (
    <Container className={s.logo}>
      <LogoIcon
        width={64}
        height={64}
      />
      <Headline className={s.logo_headline}>DevTimer</Headline>
    </Container>
  );
}

export default Logo;