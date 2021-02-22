import React from 'react';
import { Header as Container, Wrapper } from '../../ui';
import { Avatar } from '../../common';
import s from './header.module.scss';

interface Props {

}

const Header: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container>
      <Wrapper className={s.header_wrapper}>
        <Avatar />
      </Wrapper>
    </Container>
  );
}

export default Header;