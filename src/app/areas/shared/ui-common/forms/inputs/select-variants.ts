import { mergeClasses } from '@ht/shared/util-components/merge-classes';
import { cva, type VariantProps } from 'class-variance-authority';

export const selectVariants = cva(mergeClasses('select'), {
  variants: {
    htType: {
      default: 'select-bordered',
      bordered: 'select-bordered',
      ghost: 'select-ghost',
    },
    htColor: {
      default: '',
      neutral: 'select-neutral',
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
      info: 'select-info',
      success: 'select-success',
      warning: 'select-warning',
      error: 'select-error',
    },
    hSize: {
      default: 'select-md',
      xs: 'select-xs',
      sm: 'select-sm',
      md: 'select-md',
      lg: 'select-lg',
      xl: 'select-xl',
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

export type HtSelectTypeVariants = NonNullable<VariantProps<typeof selectVariants>['htType']>;
export type HtSelectColorVariants = NonNullable<VariantProps<typeof selectVariants>['htColor']>;
export type HtSelectSizeVariants = NonNullable<VariantProps<typeof selectVariants>['hSize']>;
