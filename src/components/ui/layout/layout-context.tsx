import { createContext, useState } from 'react';
import { type TLayoutContext, type TLayoutContextSetter } from './types';

const LayoutContext = createContext<TLayoutContext>({
  hasScreen: false,
  isHeaderSticky: false,
  headerBottom: 0,
  isFooterSticky: false,
  footerTop: 0,
});

const LayoutContextSetter = createContext<TLayoutContextSetter>({
  setHasScreen: () => {},
  setIsHeaderSticky: () => {},
  setHeaderBottom: () => {},
  setIsFooterSticky: () => {},
  setFooterTop: () => {},
});

const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasScreen, setHasScreen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);
  const [isFooterSticky, setIsFooterSticky] = useState(false);
  const [footerTop, setFooterTop] = useState(0);

  return (
    <LayoutContextSetter.Provider
      value={{
        setHasScreen,
        setIsHeaderSticky,
        setHeaderBottom,
        setIsFooterSticky,
        setFooterTop,
      }}
    >
      <LayoutContext.Provider
        value={{
          hasScreen,
          isHeaderSticky,
          isFooterSticky,
          headerBottom,
          footerTop,
        }}
      >
        {children}
      </LayoutContext.Provider>
    </LayoutContextSetter.Provider>
  );
};

export { LayoutContext, LayoutContextProvider, LayoutContextSetter };
