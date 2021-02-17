import React from 'react';

const TaskTodo: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
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
      d="M30 11.75A3.75 3.75 0 0026.25 8h-13.5A3.75 3.75 0 009 11.75v13.5A3.75 3.75 0 0012.75 29h6.15a8.198 8.198 0 01-.59-1.5h-5.56a2.25 2.25 0 01-2.25-2.25V14h18v3.31a8.119 8.119 0 011.5.59v-6.15zM12.75 9.5h13.5a2.25 2.25 0 012.25 2.25v.75h-18v-.75a2.25 2.25 0 012.25-2.25z"
      fill="#fff"
    />
    <path
      d="M26.25 32a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zm-.75-9.75a.75.75 0 111.5 0v2.25h1.5a.75.75 0 110 1.5h-2.25a.75.75 0 01-.75-.75v-3z"
      fill="#fff"
    />
  </svg>
)

export default TaskTodo;