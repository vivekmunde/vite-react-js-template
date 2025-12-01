import React, { type SVGProps } from 'react';
import { DataTestId } from './ui/data-test-id';
import { cn } from './ui/utils/cn';

const LogoSvg: React.FC<SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <DataTestId value="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={cn('rounded size-10', className)}
        {...props}
      >
        <rect
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          rx="8"
          className="fill-primary"
        />
        <rect
          x="10%"
          y="10%"
          width="80%"
          height="80%"
          rx="8"
          className="fill-primary-foreground"
        />
        <rect
          x="20%"
          y="20%"
          width="60%"
          height="60%"
          rx="8"
          className="fill-primary"
        />
        <g transform="rotate(45, 50, 50)">
          <rect
            x="50"
            y="44"
            width="41%"
            height="12.5"
            rx="8"
            className="fill-primary-foreground"
          />
        </g>
      </svg>
    </DataTestId>
  );
};

export { LogoSvg };
