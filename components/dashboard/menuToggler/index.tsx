import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuToggleIcon } from '../../icons';
import { Container } from '../../ui';
import { handleMenu } from '../../../utils/ui';
import s from './menuToggler.module.scss';

interface Props {
  
}

const MenuToggler: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  
  return (
    <Container
      bgColor={({ theme }) => theme.secondary}
      className={s.menuToggler}
      onClick={() => dispatch(handleMenu(true))}
    >
      <MenuToggleIcon />
    </Container>
  );
}

export default MenuToggler;