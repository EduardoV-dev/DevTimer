import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '..';
import { RootState } from '../../../models/interfaces/common';
import { RegisterType } from '../../../models/types/common';
import { handleModal } from '../../../utils/ui';
import { Container } from '../../ui';
import s from './modal.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
  type: RegisterType;
}

const Modal: React.FC<Props> = ({
  children,
  type,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { isModalDisplayed } = useSelector((state: RootState) => state.ui);
  
  return (
    <>
      {isModalDisplayed[type] && (
        <>
          <Backdrop onClick={() => dispatch(handleModal(type, false))} />
          <Container
            bgColor={({ theme }) => theme.light}
            className={s.modal}>
            {children}
          </Container>
        </>
      )}
    </>
  );
}

export default Modal;