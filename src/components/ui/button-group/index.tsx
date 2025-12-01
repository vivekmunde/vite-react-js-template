import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Flex } from '../flex';
import { cn } from '../utils/cn';
import { buttonGroupVariants } from './variants';

export type ButtonGroupProps = Omit<React.ComponentProps<typeof Flex>, 'gap'> &
  VariantProps<typeof buttonGroupVariants>;

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  gap = 'normal',
  ...props
}) => {
  return (
    <Flex {...props} className={cn(buttonGroupVariants({ gap }), className)} />
  );
};

export { ButtonGroup };
