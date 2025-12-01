import * as React from 'react';
import { cn } from '../utils/cn';
import { flexVariants } from './variants';

type TDirection = 'horizontal' | 'vertical';
type TWrap = 'wrap' | 'nowrap' | 'reverse';
type TGap = 'none' | 'normal' | 'sm' | 'lg';
type TJustifyContent =
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'evenly'
  | 'around'
  | 'stretch';
type TJustifyItems = 'start' | 'end' | 'center' | 'stretch';
type TAlignContent =
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'baseline'
  | 'stretch';
type TAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type TPlaceContent =
  | 'center'
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'baseline'
  | 'stretch';
type TPlaceItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type TFlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: {
    default?: TDirection;
    sm?: TDirection;
    md?: TDirection;
    lg?: TDirection;
  };
  wrap?: {
    default?: TWrap;
    sm?: TWrap;
    md?: TWrap;
    lg?: TWrap;
  };
  justifyContent?: {
    default?: TJustifyContent;
    sm?: TJustifyContent;
    md?: TJustifyContent;
    lg?: TJustifyContent;
  };
  justifyItems?: {
    default?: TJustifyItems;
    sm?: TJustifyItems;
    md?: TJustifyItems;
    lg?: TJustifyItems;
  };
  alignContent?: {
    default?: TAlignContent;
    sm?: TAlignContent;
    md?: TAlignContent;
    lg?: TAlignContent;
  };
  alignItems?: {
    default?: TAlignItems;
    sm?: TAlignItems;
    md?: TAlignItems;
    lg?: TAlignItems;
  };
  placeContent?: {
    default?: TPlaceContent;
    sm?: TPlaceContent;
    md?: TPlaceContent;
    lg?: TPlaceContent;
  };
  placeItems?: {
    default?: TPlaceItems;
    sm?: TPlaceItems;
    md?: TPlaceItems;
    lg?: TPlaceItems;
  };
  gap?: TGap;
};

const Flex: React.FC<React.ComponentProps<'div'> & TFlexProps> = ({
  className,
  direction,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  placeContent,
  placeItems,
  wrap,
  gap,
  ...props
}) => {
  const directionDefault = direction?.default;
  const directionSm = direction?.sm;
  const directionMd = direction?.md;
  const directionLg = direction?.lg;

  const wrapDefault = wrap?.default;
  const wrapSm = wrap?.sm;
  const wrapMd = wrap?.md;
  const wrapLg = wrap?.lg;

  const justifyContentDefault = justifyContent?.default;
  const justifyContentSm = justifyContent?.sm;
  const justifyContentMd = justifyContent?.md;
  const justifyContentLg = justifyContent?.lg;

  const justifyItemsDefault = justifyItems?.default;
  const justifyItemsSm = justifyItems?.sm;
  const justifyItemsMd = justifyItems?.md;
  const justifyItemsLg = justifyItems?.lg;

  const alignContentDefault = alignContent?.default;
  const alignContentSm = alignContent?.sm;
  const alignContentMd = alignContent?.md;
  const alignContentLg = alignContent?.lg;

  const alignItemsDefault = alignItems?.default;
  const alignItemsSm = alignItems?.sm;
  const alignItemsMd = alignItems?.md;
  const alignItemsLg = alignItems?.lg;

  const placeContentDefault = placeContent?.default;
  const placeContentSm = placeContent?.sm;
  const placeContentMd = placeContent?.md;
  const placeContentLg = placeContent?.lg;

  const placeItemsDefault = placeItems?.default;
  const placeItemsSm = placeItems?.sm;
  const placeItemsMd = placeItems?.md;
  const placeItemsLg = placeItems?.lg;

  return (
    <div
      className={cn(
        flexVariants({
          direction: directionDefault,
          directionSm,
          directionMd,
          directionLg,

          wrap: wrapDefault,
          wrapSm,
          wrapMd,
          wrapLg,

          justifyContent: justifyContentDefault,
          justifyContentSm,
          justifyContentMd,
          justifyContentLg,

          justifyItems: justifyItemsDefault,
          justifyItemsSm,
          justifyItemsMd,
          justifyItemsLg,

          alignContent: alignContentDefault,
          alignContentSm,
          alignContentMd,
          alignContentLg,

          alignItems: alignItemsDefault,
          alignItemsSm,
          alignItemsMd,
          alignItemsLg,

          placeContent: placeContentDefault,
          placeContentSm,
          placeContentMd,
          placeContentLg,

          placeItems: placeItemsDefault,
          placeItemsSm,
          placeItemsMd,
          placeItemsLg,

          gap,
        }),
        className
      )}
      {...props}
    />
  );
};

export { Flex };
