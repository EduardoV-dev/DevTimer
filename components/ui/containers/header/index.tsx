import React from 'react';
import { Header as HeaderContainer } from './header.component';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Header: React.FC<Props> = (props): JSX.Element => {
  return (
    <HeaderContainer {...props} />
  )
}

export default Header;