import React, { useEffect } from 'react';
import { Logo } from '../../common';
import { Img } from '../../ui';

interface Props {

}

const ClockImage: React.FC<Props> = (): JSX.Element => {
  const handleImageSize = () => {
    console.log(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleImageSize);

    return () => window.removeEventListener('resize', handleImageSize);
  }, []);

  return (
    <>
      <Logo />
      <Img
        src='/static/img/HomePic.jpg'
        alt='Home page clock image'
        maxHeight='20rem'
      />
    </>
  );
}

export default ClockImage;