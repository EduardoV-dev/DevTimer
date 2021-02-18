import React from 'react';
import { Image } from './img.component';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Img: React.FC<Props> = (props): JSX.Element => {
  return (  
    <Image {...props} />
  );
}

export default Img;