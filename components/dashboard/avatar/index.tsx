import React from 'react';
import { Img, Span } from '../../ui';
import s from './avatar.module.scss';

interface Props {
  src?: string;
  alt?: string;
}

const Avatar: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Span avatar='true' className={s.avatar_username}>Eduardo Varela</Span>
      <Img
        src='https://placekitten.com/250'
        alt='Avatar image'
        className={s.avatar_userimage}
      />
    </>
  );
}

export default Avatar;