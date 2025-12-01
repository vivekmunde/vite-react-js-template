export type TScreenContext = {
  stickyHeader: boolean;
  stickyFooter: boolean;
};

export type TScreenContextSetter = {
  setStickyHeader: (value: boolean) => void;
  setStickyFooter: (value: boolean) => void;
};
