import React from 'react';

const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.667 16h6.666v2.667H2.667V16zm21.56 2.333a6.637 6.637 0 001.106-3.666A6.67 6.67 0 0018.667 8 6.67 6.67 0 0012 14.667a6.669 6.669 0 006.667 6.666c1.36 0 2.613-.413 3.68-1.106l5.106 5.106 1.88-1.88-5.106-5.12zm-5.56.334c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-16-9.334h6.666V12H2.667V9.333zm0 13.334H16v2.666H2.667v-2.666z"
      fill="#333"
    />
  </svg>
);

export default Search;