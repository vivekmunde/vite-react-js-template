import React, { useEffect, useState } from 'react';

const DelayedMount: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay,
}) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setMount(true);
    }, delay ?? 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return mount ? children : null;
};

export { DelayedMount };
