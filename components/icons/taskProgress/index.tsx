import React from 'react';

const TaskProgress: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
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
      d="M21.173 8v2.428a9.61 9.61 0 018.372 10.72c-.553 4.374-3.994 7.848-8.372 8.364v2.404c6.616-.661 11.428-6.526 10.766-13.136C31.398 13.072 26.863 8.565 21.173 8zm-2.406.036a11.828 11.828 0 00-6.412 2.644l1.72 1.779a9.623 9.623 0 014.692-2.02V8.037zm-8.108 4.339A11.873 11.873 0 008 18.78h2.406a9.63 9.63 0 011.973-4.687l-1.72-1.718zm-2.647 8.809a12.06 12.06 0 002.659 6.405l1.708-1.718a9.612 9.612 0 01-1.961-4.687H8.012zm6.063 6.453l-1.72 1.647A12.028 12.028 0 0018.767 32v-2.404a9.632 9.632 0 01-4.692-1.959zm6.496-13.664v6.31l5.413 3.208-.902 1.479-6.315-3.786v-7.211h1.804z"
      fill="#fff"
    />
  </svg>
)

export default TaskProgress;