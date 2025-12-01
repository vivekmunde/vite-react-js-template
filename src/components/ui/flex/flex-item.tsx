import * as React from 'react';
import { cn } from '../utils/cn';
import { flexItemVariants } from './variants';

type TJustifySelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
type TAlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type TPlaceSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
type TFlex =
  | 'auto'
  | 'initial'
  | 'none'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;

const FlexItem: React.FC<
  React.ComponentProps<'div'> & {
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
    flex?: {
      default?: TFlex;
      sm?: TFlex;
      md?: TFlex;
      lg?: TFlex;
    };
  }
> = ({ className, justifySelf, alignSelf, placeSelf, flex, ...props }) => {
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

  const flexDefault = flex?.default;
  const flexSm = flex?.sm;
  const flexMd = flex?.md;
  const flexLg = flex?.lg;

  return (
    <div
      className={cn(
        flexItemVariants({
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

          flex: flexDefault,
          flexSm,
          flexMd,
          flexLg,
        }),
        className
      )}
      {...props}
    />
  );
};

export { FlexItem };
