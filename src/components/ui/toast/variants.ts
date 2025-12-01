import { cva } from 'class-variance-authority';

const toastVariants = cva(
  'group pointer-events-auto relative w-full overflow-hidden rounded-md bg-background border px-4 py-3 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        success: '--toast-success',
        destructive: '--toast-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export { toastVariants };
