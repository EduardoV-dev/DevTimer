import React from 'react';

const TaskCompleted: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
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
      d="M20 8a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z"
      fill="#fff"
    />
    <path
      d="M18.34 25.74l-5-5a1 1 0 011.41-1.41l3.59 3.59 6.78-6.78a1 1 0 011.41 1.41l-8.19 8.19z"
      fill="#fff"
    />
  </svg>
)

export default TaskCompleted;