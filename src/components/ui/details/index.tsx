import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { DataTestId } from '../data-test-id';
import { Grid, GridItem } from '../grid';
import { gridItemVariants } from '../grid/variants';
import { TypographyDiv } from '../typography';
import { cn } from '../utils/cn';
import {
  detailsItemHorizontalVariants,
  detailsItemVariants,
  detailsItemVerticalVariants,
  detailsVariants,
} from './variants';

const DetailsItemLabel: React.FC<
  React.ComponentProps<typeof TypographyDiv> & {
    colon?: boolean;
  }
> = ({ className, colon, children, ...props }) => {
  const detailsContextValue = React.useContext(DetailsContext);
  const derivedColon = colon ?? detailsContextValue.colon;

  return (
    <TypographyDiv
      className={cn('font-normal', 'text-muted-foreground', className)}
      {...props}
    >
      {children}
      {derivedColon ? ':' : ''}
    </TypographyDiv>
  );
};

const DetailsItemValue: React.FC<
  React.ComponentProps<typeof TypographyDiv>
> = ({ className, ...props }) => {
  return (
    <DataTestId value="value">
      <TypographyDiv
        className={cn('leading-normal font-normal', className)}
        {...props}
      />
    </DataTestId>
  );
};

const DetailsItemContext = React.createContext<{
  orientation?: 'horizontal' | 'vertical' | undefined | null;
}>({ orientation: 'vertical' });

const DetailsItem: React.FC<
  React.ComponentProps<typeof GridItem> &
    VariantProps<typeof gridItemVariants> &
    VariantProps<typeof detailsItemVariants>
> = ({
  className,
  orientation,
  gap,
  colSpan,
  colSpanSm,
  colSpanMd,
  colSpanLg,
  rowSpan,
  rowSpanSm,
  rowSpanMd,
  rowSpanLg,
  ...props
}) => {
  const detailsContextValue = React.useContext(DetailsContext);
  const derivedOrientation = orientation ?? detailsContextValue.orientation;
  const derivedGap = gap ?? detailsContextValue.gap;

  return (
    <DetailsItemContext.Provider value={{ orientation: derivedOrientation }}>
      <DataTestId value="item">
        <GridItem
          className={cn(
            gridItemVariants({
              colSpan,
              colSpanSm,
              colSpanMd,
              colSpanLg,
              rowSpan,
              rowSpanSm,
              rowSpanMd,
              rowSpanLg,
            }),
            detailsItemVariants({
              orientation: derivedOrientation,
              gap: derivedGap,
            }),
            derivedOrientation === 'horizontal'
              ? detailsItemHorizontalVariants({ gap })
              : detailsItemVerticalVariants({ gap: derivedGap }),
            className
          )}
          {...props}
        />
      </DataTestId>
    </DetailsItemContext.Provider>
  );
};

const DetailsContext = React.createContext<{
  colon?: boolean | undefined | null;
  gap?: 'default' | 'sm' | 'lg' | undefined | null;
  orientation?: 'horizontal' | 'vertical' | undefined | null;
}>({ gap: 'default', orientation: 'vertical' });

const Details: React.FC<
  Omit<React.ComponentProps<typeof Grid>, 'gap'> &
    VariantProps<typeof detailsVariants> & {
      colon?: boolean;
      gap?: 'default' | 'sm' | 'lg';
    }
> = ({ className, colon, columns, gap = 'default', orientation, ...props }) => {
  return (
    <DetailsContext.Provider
      value={{
        colon: colon ?? orientation === 'horizontal',
        gap,
        orientation,
      }}
    >
      <DataTestId value="details">
        <Grid
          columns={columns}
          gap={gap ? (gap === 'default' ? 'normal' : gap) : 'normal'}
          className={cn(
            detailsVariants({
              orientation,
            }),
            className
          )}
          {...props}
        />
      </DataTestId>
    </DetailsContext.Provider>
  );
};

export { Details, DetailsItem, DetailsItemLabel, DetailsItemValue };
