import React from 'react';

export default function CoffeeBean({ size = 15, rotate = 30, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.15em', flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <g transform={`rotate(${rotate} 12 12)`}>
        {/* Coffee bean outer contour */}
        <path d="M12 2.8C6.6 2.8 3.8 6.8 3.8 12C3.8 17.2 6.6 21.2 12 21.2C17.4 21.2 20.2 17.2 20.2 12C20.2 6.8 17.4 2.8 12 2.8Z" />
        {/* Characteristic curved center cleft */}
        <path d="M12 2.8C9.5 7.2 14.5 10.2 12 13.5C9.5 16.8 14.5 18.8 12 21.2" />
      </g>
    </svg>
  );
}
