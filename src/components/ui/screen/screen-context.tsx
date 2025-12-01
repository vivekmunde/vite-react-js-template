import React, { createContext, useState } from 'react';
import { type TScreenContext, type TScreenContextSetter } from './types';

const ScreenContext = createContext<TScreenContext>({
  stickyHeader: false,
  stickyFooter: false,
});

const ScreenAPIContext = createContext<TScreenContextSetter>({
  setStickyHeader: () => {},
  setStickyFooter: () => {},
});

const ScreenContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [stickyFooter, setStickyFooter] = useState(false);

  return (
    <ScreenContext.Provider
      value={{
        stickyHeader,
        stickyFooter,
      }}
    >
      <ScreenAPIContext.Provider
        value={{
          setStickyHeader: (value: boolean) => {
            setStickyHeader(value);
          },
          setStickyFooter: (value: boolean) => {
            setStickyFooter(value);
          },
        }}
      >
        {children}
      </ScreenAPIContext.Provider>
    </ScreenContext.Provider>
  );
};

export { ScreenAPIContext, ScreenContext, ScreenContextProvider };
