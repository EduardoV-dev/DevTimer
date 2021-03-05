import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { handleSignIn } from '../../../utils/signIn/handlers';
import { Logo } from '../../common';
import { FacebookIcon, GithubIcon } from '../../icons';
import { Container, Title, Subtitle, Button, Span } from '../../ui';
import s from './signIn.module.scss';

interface Props {

}

const SignIn: React.FC<Props> = (): JSX.Element => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { isButtonLoading: { facebook, github } } = useSelector((state: RootState) => state.signIn);

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
        onClick={() => dispatch(handleSignIn('facebook', push))}
        loading={facebook ? 'true' : 'false'}
        disabled={facebook}
      >
        <FacebookIcon width={32} height={32} className={s.signIn_icon} />
        <Span
          fontColor={({ theme }) => theme.light}
          className={s.signIn_text}
        >Sign in with Facebook</Span>
      </Button>
      <Button
        type='button'
        github='true'
        className={s.signIn_button}
        onClick={() => dispatch(handleSignIn('github', push))}
        loading={github ? 'true' : 'false'}
        disabled={github}
      >
        <GithubIcon width={32} height={32} className={s.signIn_icon} />
        <Span
          fontColor={({ theme }) => theme.light}
          className={s.signIn_text}
        >Sign in with Github</Span>
      </Button>
    </Container>
  );
}

export default SignIn;