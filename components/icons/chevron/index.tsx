import React from 'react';

const Chevron = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 2l-4 4 4 4"
      stroke="#333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Chevron;