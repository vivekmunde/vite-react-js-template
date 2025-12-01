import { useContext } from 'react';
import { ScreenAPIContext, ScreenContext } from './screen-context';

const useIsStickyHeader = () => {
  const { stickyHeader } = useContext(ScreenContext);
  return stickyHeader;
};

const useIsStickyFooter = () => {
  const { stickyFooter } = useContext(ScreenContext);
  return stickyFooter;
};

const useSetStickyHeader = () => {
  const { setStickyHeader } = useContext(ScreenAPIContext);
  return setStickyHeader;
};

const useSetStickyFooter = () => {
  const { setStickyFooter } = useContext(ScreenAPIContext);
  return setStickyFooter;
};

export {
  useIsStickyFooter,
  useIsStickyHeader,
  useSetStickyFooter,
  useSetStickyHeader,
};
