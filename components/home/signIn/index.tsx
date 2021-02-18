import React from 'react';
import { FacebookIcon, GithubIcon } from '../../icons';
import { Container, Title, Subtitle, Button } from '../../ui';
import s from './signIn.module.scss';

interface Props {

}

const SignIn: React.FC<Props> = (): JSX.Element => {
  return (
    <Container
      bgColor={({ theme: { light } }) => light}
      className={s.signIn}
    >
      <Subtitle uppercase className={s.signIn_subtitle}>
        Sign in to start working with this great tool.
      </Subtitle>
      <Title className={s.signIn_title}>
        Control the time it takes to develop certain tasks.
      </Title>
      <Button facebook className={s.signIn_button}>
        <FacebookIcon width={32} height={32} />
        Sign in with Facebook
      </Button>
      <Button github className={s.signIn_button}>
        <GithubIcon width={32} height={32} />
        Sign in with Github
      </Button>
    </Container>
  );
}

export default SignIn;