import * as React from 'react';
import { cn } from '../utils/cn';
import { gridItemVariants } from './variants';

type TColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type TRowSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type TJustifySelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
type TAlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type TPlaceSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';

const GridItem: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    colSpan?: {
      default?: TColSpan;
      sm?: TColSpan;
      md?: TColSpan;
      lg?: TColSpan;
    };
    rowSpan?: {
      default?: TRowSpan;
      sm?: TRowSpan;
      md?: TRowSpan;
      lg?: TRowSpan;
    };
    justifySelf?: {
      default?: TJustifySelf;
      sm?: TJustifySelf;
      md?: TJustifySelf;
      lg?: TJustifySelf;
    };
    alignSelf?: {
      default?: TAlignSelf;
      sm?: TAlignSelf;
      md?: TAlignSelf;
      lg?: TAlignSelf;
    };
    placeSelf?: {
      default?: TPlaceSelf;
      sm?: TPlaceSelf;
      md?: TPlaceSelf;
      lg?: TPlaceSelf;
    };
  }
> = ({
  className,
  colSpan,
  rowSpan,
  justifySelf,
  alignSelf,
  placeSelf,
  ...props
}) => {
  const colSpanDefault = colSpan?.default;
  const colSpanSm = colSpan?.sm;
  const colSpanMd = colSpan?.md;
  const colSpanLg = colSpan?.lg;

  const rowSpanDefault = rowSpan?.default;
  const rowSpanSm = rowSpan?.sm;
  const rowSpanMd = rowSpan?.md;
  const rowSpanLg = rowSpan?.lg;

  const justifySelfDefault = justifySelf?.default;
  const justifySelfSm = justifySelf?.sm;
  const justifySelfMd = justifySelf?.md;
  const justifySelfLg = justifySelf?.lg;

  const alignSelfDefault = alignSelf?.default;
  const alignSelfSm = alignSelf?.sm;
  const alignSelfMd = alignSelf?.md;
  const alignSelfLg = alignSelf?.lg;

  const placeSelfDefault = placeSelf?.default;
  const placeSelfSm = placeSelf?.sm;
  const placeSelfMd = placeSelf?.md;
  const placeSelfLg = placeSelf?.lg;

  return (
    <div
      className={cn(
        gridItemVariants({
          colSpan: colSpanDefault,
          colSpanSm,
          colSpanMd,
          colSpanLg,

          rowSpan: rowSpanDefault,
          rowSpanSm,
          rowSpanMd,
          rowSpanLg,

          justifySelf: justifySelfDefault,
          justifySelfSm,
          justifySelfMd,
          justifySelfLg,

          alignSelf: alignSelfDefault,
          alignSelfSm,
          alignSelfMd,
          alignSelfLg,

          placeSelf: placeSelfDefault,
          placeSelfSm,
          placeSelfMd,
          placeSelfLg,
        }),
        className
      )}
      {...props}
    />
  );
};

export { GridItem };
