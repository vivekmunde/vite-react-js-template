import { useEffect, useRef, type ComponentProps } from 'react';
import { useEChartsInstance } from './hooks/use-echarts-instance';
import { cn } from './utils/cn';

const Chart: React.FC<
  ComponentProps<'div'> & {
    theme?: string | object | null | undefined;
    option?: echarts.EChartsOption | undefined;
  }
> = ({ className, theme, option, ...props }) => {
  const refEChartContainer = useRef<HTMLDivElement>(null);
  const { getEChartsInstance } = useEChartsInstance();

  useEffect(() => {
    if (refEChartContainer.current) {
      const echart = getEChartsInstance(refEChartContainer.current, theme);

      echart?.setOption(option ?? {});
    }
  }, [getEChartsInstance, option]);

  return (
    <div
      ref={refEChartContainer}
      className={cn('h-96 w-96', className)}
      {...props}
    />
  );
};

export { Chart };
