import React from 'react';

const Facebook: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 29.162C0 43.58 10.471 55.569 24.167 58V37.055h-7.25V29h7.25v-6.445c0-7.25 4.671-11.276 11.278-11.276 2.093 0 4.35.321 6.443.642v7.412h-3.705c-3.545 0-4.35 1.772-4.35 4.029V29h7.734l-1.288 8.055h-6.446V58C47.53 55.569 58 43.582 58 29.162 58 13.122 44.95 0 29 0S0 13.123 0 29.162z"
      fill="#fff"
    />
  </svg>
);

export default Facebook;