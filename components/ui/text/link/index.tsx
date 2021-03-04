import React from 'react';
import { Link as LinkComp } from './link.component';

interface Props {
  children: string;
  href: string;
}

const Link: React.FC<Props> = (props): JSX.Element => {
  return (
    <LinkComp {...props} target='_blank' rel='noreferrer noopener' />
  )
}

export default Link;