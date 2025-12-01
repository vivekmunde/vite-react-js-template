import { cva } from 'class-variance-authority';

const detailsVariants = cva('--details', {
  variants: {
    orientation: {
      horizontal: '',
      vertical: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const detailsItemVariants = cva('--details-item flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    gap: {
      default: 'gap-0.5',
      sm: 'gap-0.5',
      lg: 'gap-1',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    gap: 'default',
  },
});

const detailsItemHorizontalVariants = cva('flex', {
  variants: {
    gap: {
      default: 'gap-2',
      sm: 'gap-1',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    gap: 'default',
  },
});

const detailsItemVerticalVariants = cva('flex', {
  variants: {
    gap: {
      default: 'gap-0.5',
      sm: 'gap-0.5',
      lg: 'gap-1',
    },
  },
  defaultVariants: {
    gap: 'default',
  },
});

export {
  detailsItemHorizontalVariants,
  detailsItemVariants,
  detailsItemVerticalVariants,
  detailsVariants,
};
