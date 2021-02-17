import React from 'react';

const Tasks: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#3C589F" />
    <path
      d="M17.75 11.75h12.375v1.5H17.75v-1.5zM9.875 12.5a3 3 0 105.999 0 3 3 0 00-5.999 0zm3-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM17.75 19.25h12.375v1.5H17.75v-1.5zM12.875 23a3 3 0 100-5.999 3 3 0 000 5.999zm0-4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM17.75 26.75h12.375v1.5H17.75v-1.5zM12.875 30.5a3 3 0 100-5.999 3 3 0 000 5.999zm0-4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill="#F2F2F2"
    />
  </svg>
)

export default Tasks;