import React, { useMemo } from 'react';

const Repeat: React.FC<{ children: React.ReactNode; length: number }> = ({
  children,
  length,
}) => {
  const list = useMemo(
    () => Array.from({ length }).map((_, index) => index),
    [length]
  );

  return (
    <React.Fragment>
      {list.map(it => (
        <React.Fragment key={it}>{children}</React.Fragment>
      ))}
    </React.Fragment>
  );
};

export { Repeat };
