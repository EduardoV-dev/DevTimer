import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../../models/interfaces/dashboard';
import { RootState } from '../../../models/interfaces/common';
import { handleAvatarPictureURL } from '../../../utils/dashboard/handlers';
import { Img, Span } from '../../ui';
import s from './avatar.module.scss';

interface Props {}

const Avatar: React.FC<Props> = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.signIn);
  if (!user) return null;
  const profile: User = useMemo(() => handleAvatarPictureURL(user), [user]);
  const { displayName, photoURL } = profile;

  return (
    <>
      <Span
        fontFamily='Montserrat'
        className={s.avatar_username}
        fontColor={({ theme }) => theme.primary}
      >{displayName}</Span>
      <Img
        src={photoURL}
        alt='Avatar image'
        className={s.avatar_userimage}
      />
    </>
  );
}

export default Avatar;