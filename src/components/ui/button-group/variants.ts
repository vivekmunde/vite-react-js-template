import { cva } from 'class-variance-authority';

const buttonGroupVariants = cva(['--button-group'], {
  variants: {
    gap: {
      none: 'gap-0',
      normal: 'gap-1.5',
      sm: 'gap-1',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    gap: 'normal',
  },
});

export { buttonGroupVariants };
