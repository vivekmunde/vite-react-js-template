import { cva } from 'class-variance-authority';
import { focusVariants } from '../variants';

const inputVariants = cva(
  [
    '--input',
    'inline-flex justify-between items-center gap-2',
    'placeholder:text-muted-foreground border-input flex w-full min-w-0 rounded-md border bg-transparent text-base text-left shadow transition-[color,box-shadow] outline-none',
    'file:text-foreground file:inline-flex file:border-0 file:bg-transparent file:font-medium',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    `[&_svg:not([class*='text-'])]:text-muted-foreground`,
    focusVariants(),
  ],
  {
    variants: {
      size: {
        default: `min-h-9 px-3 py-1 [&_svg:not([class*='size-'])]:size-4`,
        sm: `min-h-8 text-sm px-3 py-1 [&_svg:not([class*='size-'])]:size-3`,
        lg: `min-h-10 px-4 py-1.5 text-lg [&_svg:not([class*='size-'])]:size-5`,
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export { inputVariants };
