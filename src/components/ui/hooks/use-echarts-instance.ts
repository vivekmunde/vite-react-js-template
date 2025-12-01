import { init } from 'echarts';
import { useEffect, useRef } from 'react';
import { echartsTheme } from '../echarts-theme';

const useEChartsInstance = () => {
  const refEChartsInstance = useRef<echarts.ECharts | undefined>(undefined);

  const getEChartsInstance = (
    elm: HTMLElement,
    theme?: string | object | null | undefined,
    opts?: echarts.EChartsInitOpts | undefined
  ): echarts.ECharts => {
    const _theme =
      (theme ?? document.documentElement.classList.contains('dark'))
        ? echartsTheme.dark
        : echartsTheme.light;

    if (
      !refEChartsInstance.current ||
      (refEChartsInstance.current && refEChartsInstance.current.isDisposed())
    ) {
      refEChartsInstance.current = init(elm, _theme, opts);
    }
    return refEChartsInstance.current;
  };

  const disposeEChartsInstance = () => {
    if (
      refEChartsInstance.current &&
      !refEChartsInstance.current.isDisposed()
    ) {
      refEChartsInstance.current.dispose();
    }
  };

  useEffect(() => {
    return () => disposeEChartsInstance();
  }, []);

  return { getEChartsInstance, disposeEChartsInstance };
};

export { useEChartsInstance };
