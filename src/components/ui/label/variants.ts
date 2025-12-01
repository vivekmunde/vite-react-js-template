import { cva } from 'class-variance-authority';

const labelVariants = cva(
  [
    '--label',
    'flex items-center gap-2 font-medium leading-normal select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        default: '',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export { labelVariants };
