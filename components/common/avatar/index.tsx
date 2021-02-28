import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/redux';
import { Img, Span } from '../../ui';
import s from './avatar.module.scss';

interface Props {}

const Avatar: React.FC<Props> = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Span
        fontFamily='Montserrat'
        className={s.avatar_username}
        fontColor={({ theme }) => theme.primary}
      >Eduardo Varela</Span>
      <Img
        src='https://placekitten.com/250'
        alt='Avatar image'
        className={s.avatar_userimage}
      />
    </>
  );
}

export default Avatar;