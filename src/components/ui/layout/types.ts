export type TLayoutContext = {
  hasScreen: boolean;
  isHeaderSticky: boolean;
  headerBottom: number;
  isFooterSticky: boolean;
  footerTop: number;
};

export type TLayoutContextSetter = {
  setHasScreen: (hasScreen: boolean) => void;
  setIsHeaderSticky: (isHeaderSticky: boolean) => void;
  setHeaderBottom: (headerBottom: number) => void;
  setIsFooterSticky: (isFooterSticky: boolean) => void;
  setFooterTop: (footerTop: number) => void;
};
