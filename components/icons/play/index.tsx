import React from 'react';

const Play: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={64} height={64} rx={32} fill="#3C589F" />
    <rect width={64} height={64} rx={32} fill="#3C589F" />
    <path
      d="M32 4C16.538 4 4 16.538 4 32s12.538 28 28 28 28-12.538 28-28S47.462 4 32 4zm0 51.25C19.163 55.25 8.75 44.837 8.75 32S19.163 8.75 32 8.75 55.25 19.163 55.25 32 44.837 55.25 32 55.25z"
      fill="#F2F2F2"
    />
    <path
      d="M44.962 31.194L26.456 17.756a.994.994 0 00-1.581.806v26.875a.996.996 0 001.581.807l18.506-13.438a.993.993 0 000-1.612zm-16.1 8.375V24.43L39.282 32l-10.42 7.569z"
      fill="#F2F2F2"
    />
  </svg>
);

export default Play;