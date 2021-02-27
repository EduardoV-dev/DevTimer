import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuToggleIcon } from '../../icons';
import { Container } from '../../ui';
import { openMenu } from '../../../utils/ui';
import s from './menuToggler.module.scss';

interface Props {
  
}

const MenuToggler: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  
  return (
    <Container
      bgColor={({ theme }) => theme.secondary}
      className={s.menuToggler}
      onClick={() => dispatch(openMenu())}
    >
      <MenuToggleIcon />
    </Container>
  );
}

export default MenuToggler;