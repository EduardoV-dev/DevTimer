import React from 'react';
import { handleSignIn } from '../../../utils/signIn';
import { Logo } from '../../common';
import { FacebookIcon, GithubIcon } from '../../icons';
import { Container, Title, Subtitle, Button } from '../../ui';
import s from './signIn.module.scss';

interface Props {

}

const SignIn: React.FC<Props> = (): JSX.Element => {
  return (
    <Container
      bgColor={({ theme }) => theme.light}
      className={s.signIn}
    >
      <Logo className={s.signIn_logo} />
      <Subtitle uppercase className={s.signIn_subtitle}>
        Sign in to start working with this great tool.
      </Subtitle>
      <Title className={s.signIn_title}>
        Control the time it takes to develop certain tasks.
      </Title>
      <Button
        type='button'
        facebook='true'
        className={s.signIn_button}
        onClick={() => handleSignIn('facebook')}
      >
        <FacebookIcon width={32} height={32} className={s.signIn_icon} />
        Sign in with Facebook
      </Button>
      <Button
        type='button'
        github='true'
        className={s.signIn_button}
        onClick={() => handleSignIn('github')}
      >
        <GithubIcon width={32} height={32} className={s.signIn_icon} />
        Sign in with Github
      </Button>
    </Container>
  );
}

export default SignIn;