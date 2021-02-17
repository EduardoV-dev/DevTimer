import React from 'react';
import { Container, Title, Subtitle } from '../../ui';
import s from './signIn.module.scss';

interface Props {

}

const SignIn: React.FC<Props> = (): JSX.Element => {
  return (
    <Container
      width='90%'
      bgColor={({ theme: { light } }) => light}
      borderRadius='30px'
      padding='2rem 1rem'
    >
      <Subtitle uppercase className={s.signIn_subtitle}>
        Sign in to start working with this great tool.
      </Subtitle>
      <Title>
        Control the time it takes to develop certain tasks.
      </Title>
    </Container>
  );
}

export default SignIn;