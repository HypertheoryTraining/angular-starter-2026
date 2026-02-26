import { mergeClasses } from '@ht/shared/util-components/merge-classes';
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(mergeClasses('input'), {
  variants: {
    htType: {
      default: 'input-bordered',
      bordered: 'input-bordered',
      ghost: 'input-ghost',
    },
    htColor: {
      default: '',
      neutral: 'input-neutral',
      primary: 'input-primary',
      secondary: 'input-secondary',
      accent: 'input-accent',
      info: 'input-info',
      success: 'input-success',
      warning: 'input-warning',
      error: 'input-error',
    },
    hSize: {
      default: 'input-md',
      xs: 'input-xs',
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg',
      xl: 'input-xl',
    },
    hFull: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    htType: 'default',
    htColor: 'default',
    hSize: 'default',
  },
});

export type HtInputTypeVariants = NonNullable<VariantProps<typeof inputVariants>['htType']>;
export type HtInputColorVariants = NonNullable<VariantProps<typeof inputVariants>['htColor']>;
export type HtInputSizeVariants = NonNullable<VariantProps<typeof inputVariants>['hSize']>;
