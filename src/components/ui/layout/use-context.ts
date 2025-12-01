import { useContext } from 'react';
import { LayoutContext, LayoutContextSetter } from './layout-context';
import { type TLayoutContext } from './types';

const useLayoutHasScreen = (): TLayoutContext['hasScreen'] => {
  const { hasScreen } = useContext(LayoutContext);
  return hasScreen;
};

const useIsLayoutHeaderSticky = () => {
  const { isHeaderSticky } = useContext(LayoutContext);
  return isHeaderSticky;
};

const useLayoutHeaderBottom = () => {
  const { headerBottom } = useContext(LayoutContext);
  return headerBottom;
};

const useIsLayoutFooterSticky = () => {
  const { isFooterSticky } = useContext(LayoutContext);
  return isFooterSticky;
};

const useLayoutFooterTop = () => {
  const { footerTop } = useContext(LayoutContext);
  return footerTop;
};

const useSetLayoutHasScreen = () => {
  const { setHasScreen } = useContext(LayoutContextSetter);
  return setHasScreen;
};

const useSetIsLayoutHeaderSticky = () => {
  const { setIsHeaderSticky } = useContext(LayoutContextSetter);
  return setIsHeaderSticky;
};

const useSetLayoutHeaderBottom = () => {
  const { setHeaderBottom } = useContext(LayoutContextSetter);
  return setHeaderBottom;
};

const useSetIsLayoutFooterSticky = () => {
  const { setIsFooterSticky } = useContext(LayoutContextSetter);
  return setIsFooterSticky;
};

const useSetLayoutFooterTop = () => {
  const { setFooterTop } = useContext(LayoutContextSetter);
  return setFooterTop;
};

export {
  useIsLayoutFooterSticky,
  useIsLayoutHeaderSticky,
  useLayoutFooterTop,
  useLayoutHasScreen,
  useLayoutHeaderBottom,
  useSetIsLayoutFooterSticky,
  useSetIsLayoutHeaderSticky,
  useSetLayoutFooterTop,
  useSetLayoutHasScreen,
  useSetLayoutHeaderBottom,
};
