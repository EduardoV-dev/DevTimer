import React from 'react';
import s from './loading.module.scss';

const Loading: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    className={s.loading}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32.003 64c-4.319 0-8.513-.844-12.457-2.513a31.896 31.896 0 01-10.17-6.862 31.893 31.893 0 01-6.863-10.169A31.794 31.794 0 010 32a2.249 2.249 0 012.25-2.25A2.249 2.249 0 014.5 32c0 3.712.726 7.313 2.163 10.706a27.457 27.457 0 005.894 8.744 27.36 27.36 0 008.745 5.894A27.347 27.347 0 0032.003 59.5c3.713 0 7.313-.725 10.707-2.163a27.46 27.46 0 008.745-5.893 27.354 27.354 0 005.894-8.744A27.339 27.339 0 0059.506 32c0-3.712-.725-7.313-2.163-10.706a27.527 27.527 0 00-5.894-8.744 27.36 27.36 0 00-8.745-5.894 27.347 27.347 0 00-10.7-2.156 2.249 2.249 0 01-2.251-2.25A2.249 2.249 0 0132.003 0c4.32 0 8.514.844 12.458 2.513a31.896 31.896 0 0110.17 6.862 31.944 31.944 0 016.856 10.169A31.794 31.794 0 0164 32c0 4.319-.844 8.513-2.513 12.456a31.775 31.775 0 01-6.857 10.169 31.947 31.947 0 01-10.17 6.856A31.7 31.7 0 0132.004 64z"
      fill="#f2f2f2"
    />
  </svg>
)

export default Loading;