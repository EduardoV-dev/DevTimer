import React from 'react';

const Pause: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={64} height={64} rx={32} fill="#3C589F" />
    <path
      d="M32 4C16.538 4 4 16.538 4 32s12.538 28 28 28 28-12.538 28-28S47.462 4 32 4zm0 51.25C19.163 55.25 8.75 44.837 8.75 32S19.163 8.75 32 8.75 55.25 19.163 55.25 32 44.837 55.25 32 55.25zM26.5 22h-3c-.275 0-.5.225-.5.5v19c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-19c0-.275-.225-.5-.5-.5zm14 0h-3c-.275 0-.5.225-.5.5v19c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-19c0-.275-.225-.5-.5-.5z"
      fill="#F2F2F2"
    />
  </svg>
);

export default Pause;