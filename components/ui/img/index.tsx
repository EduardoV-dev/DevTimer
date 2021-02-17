import React from 'react';
import { Image } from './img.component';

interface Props {
  src: string;
  alt: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
}

const Img: React.FC<Props> = (props): JSX.Element => {
  return (  
    <Image {...props} />
  );
}

export default Img;