import { cva } from 'class-variance-authority';
import { focusVariants } from '../variants';

const buttonVariants = cva(
  [
    '--button',
    'inline-flex items-center justify-center gap-2 cursor-pointer',
    'whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none',
    `[&_svg]:shrink-0`,
    focusVariants(),
  ],
  {
    variants: {
      variant: {
        default:
          'border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground',
        primary:
          'border border-primary bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-visible:ring-primary',
        destructive:
          'border border-destructive bg-destructive text-white shadow hover:bg-destructive/90 focus-visible:ring-destructive',
        outline:
          'border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground',
        secondary:
          'border border-secondary bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-link underline-offset-2 hover:underline focus-visible:ring-link',
      },
      size: {
        default: `min-h-9 px-3 py-1 [&_svg:not([class*='size-'])]:size-4`,
        sm: `min-h-8 rounded-md text-sm px-3 py-1 [&_svg:not([class*='size-'])]:size-3`,
        lg: `min-h-10 rounded-lg text-lg px-4 py-1.5 [&_svg:not([class*='size-'])]:size-5`,
      },
      loading: {
        true: '[&>*:not(.--loading-icon)]:invisible',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export { buttonVariants };
