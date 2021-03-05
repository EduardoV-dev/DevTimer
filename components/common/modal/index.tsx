import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '..';
import { RootState } from '../../../models/interfaces/common';
import { handleModal } from '../../../utils/ui';
import { Container } from '../../ui';
import s from './modal.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const { isModalDisplayed } = useSelector((state: RootState) => state.ui);

  return (
    <>
      {isModalDisplayed && (
        <>
          <Backdrop onClick={() => dispatch(handleModal(false))} />
          <Container
            bgColor={({ theme }) => theme.light}
            className={s.modal}
            {...props}
          />
        </>
      )}
    </>
  );
}

export default Modal;