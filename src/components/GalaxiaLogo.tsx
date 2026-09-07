import React from 'react';

interface GalaxiaLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const GalaxiaLogo: React.FC<GalaxiaLogoProps> = ({
  className = 'w-6 h-6',
  size,
  color = 'currentColor',
}) => {
  const pathD =
    'M -12,-20.2 C -6,-15.5 -4,-11 0,-11 C 4,-11 6,-15.5 12,-20.2 A 23.5 23.5 0 1 1 12,20.2 C 6,15.5 4,11 0,11 C -4,11 -6,15.5 -12,20.2 A 23.5 23.5 0 1 1 -12,-20.2 Z';

  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Galaxia Logo"
    >
      <defs>
        <path id="galaxia-unit-component" d={pathD} fill={color} />
      </defs>
      <g transform="translate(130, 130)">
        <use href="#galaxia-unit-component" transform="rotate(0) translate(0, 80)" />
        <use href="#galaxia-unit-component" transform="rotate(72) translate(0, 80)" />
        <use href="#galaxia-unit-component" transform="rotate(144) translate(0, 80)" />
        <use href="#galaxia-unit-component" transform="rotate(216) translate(0, 80)" />
        <use href="#galaxia-unit-component" transform="rotate(288) translate(0, 80)" />
      </g>
    </svg>
  );
};
