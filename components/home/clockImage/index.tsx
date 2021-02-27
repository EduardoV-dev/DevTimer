import React from 'react';
import { Logo } from '../../common';
import { Img } from '../../ui';
import s from './clockImage.module.scss';

interface Props {

}

const ClockImage: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <Logo className={s.clockImage_logo} />
      <Img
        src='/static/img/HomePic.jpg'
        alt='Home page clock image'
        className={s.clockImage_img}
      />
    </>
  );
}

export default ClockImage;