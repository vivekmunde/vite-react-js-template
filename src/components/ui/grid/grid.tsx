import * as React from 'react';
import { cn } from '../utils/cn';
import { gridVariants } from './variants';

type TColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
type TGap = 'none' | 'normal' | 'sm' | 'lg';

const Grid: React.FC<
  React.ComponentProps<'div'> & {
    columns?: {
      default?: TColumns;
      sm?: TColumns;
      md?: TColumns;
      lg?: TColumns;
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
  }
> = ({
  className,
  columns,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  placeContent,
  placeItems,
  gap,
  ...props
}) => {
  const columnsDefault = columns?.default;
  const columnsSm = columns?.sm;
  const columnsMd = columns?.md;
  const columnsLg = columns?.lg;

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
        gridVariants({
          columns: columnsDefault,
          columnsSm,
          columnsMd,
          columnsLg,

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

export { Grid };
