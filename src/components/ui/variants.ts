import { cva } from 'class-variance-authority';
import { cn } from './utils/cn';

const focusVariants = cva(
  [
    cn(
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      'aria-invalid:ring-destructive'
    ),
  ],
  {
    variants: {
      rounded: {
        default: 'focus-visible:rounded',
        sm: 'focus-visible:rounded-sm',
        lg: 'focus-visible:rounded-lg',
        full: 'focus-visible:rounded-full',
      },
    },
  }
);

export { focusVariants };
