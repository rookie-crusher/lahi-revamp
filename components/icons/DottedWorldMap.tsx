import React from 'react';

export const DottedWorldMap: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 2000 1000" 
    {...props}
    aria-hidden="true"
  >
    <defs>
      <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#CCCCCC" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
  </svg>
);