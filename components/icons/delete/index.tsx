import React from 'react';

const Delete = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#prefix__clip0)">
      <path
        d="M16.25 6h-3V4.125c0-.827-.673-1.5-1.5-1.5h-7.5c-.827 0-1.5.673-1.5 1.5V6h-3a.75.75 0 00-.75.75v.75c0 .103.084.188.188.188H.603l.579 12.257c.038.8.698 1.43 1.498 1.43h10.64c.802 0 1.46-.628 1.498-1.43l.579-12.258h1.415A.188.188 0 0017 7.5v-.75a.75.75 0 00-.75-.75zM4.437 4.312h7.125V6H4.439V4.312zm8.703 15.375H2.86l-.567-12h11.414l-.567 12z"
        fill="#FF000F"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Delete
