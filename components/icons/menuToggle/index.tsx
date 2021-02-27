import React from 'react';

const MenuToggle: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 20h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H8v-4zm12-6h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H8v-4zm12-6h4v4h-4V8zm-6 0h4v4h-4V8zM8 8h4v4H8V8z"
      fill="#F2F2F2"
    />
  </svg>
);

export default MenuToggle;