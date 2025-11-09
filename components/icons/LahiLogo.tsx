import React from 'react';

export const LahiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#2DD4BF" />
    <path d="M14 12 H 17 V 25 H 26 V 28 H 14 Z" fill="white" />
  </svg>
);