import { mergeClasses } from '@ht/shared/util-components/merge-classes';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(mergeClasses('btn'), {
  variants: {
    htType: {
      default: 'btn-neutral',
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
    },
    hSize: {
      default: 'btn-md',
      xs: 'btn-xs',
      sm: 'btn-sm',
      lg: 'btn-lg',
      xl: 'btn-xl',
    },
    hShape: {
      default: '',
      circle: 'btn-circle',
      square: 'btn-square',
      wide: 'btn-wide',
    },
    hFull: {
      true: 'btn-block',
    },
    hLoading: {
      true: 'pointer-events-none opacity-50',
    },
    hDisabled: {
      true: 'pointer-events-none opacity-50',
    },
    hAriaDisabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    htType: 'default',
    hSize: 'default',
    hShape: 'default',
  },
});
export type HtButtonShapeVariants = NonNullable<VariantProps<typeof buttonVariants>['hShape']>;
export type HtButtonSizeVariants = NonNullable<VariantProps<typeof buttonVariants>['hSize']>;
export type HtButtonTypeVariants = NonNullable<VariantProps<typeof buttonVariants>['htType']>;
