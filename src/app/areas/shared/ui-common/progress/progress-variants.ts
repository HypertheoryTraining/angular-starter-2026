import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@ht/shared/util-components/merge-classes';

export const progressVariants = cva(mergeClasses('progress'), {
  variants: {
    htColor: {
      default: '',
      primary: 'progress-primary',
      secondary: 'progress-secondary',
      accent: 'progress-accent',
      info: 'progress-info',
      success: 'progress-success',
      warning: 'progress-warning',
      error: 'progress-error',
    },
    htSize: {
      xs: 'progress-xs',
      sm: 'progress-sm',
      md: 'progress-md',
      lg: 'progress-lg',
    },
  },
  defaultVariants: {
    htColor: 'default',
  },
});

export type HtProgressColorVariants = VariantProps<typeof progressVariants>['htColor'];
export type HtProgressSizeVariants = VariantProps<typeof progressVariants>['htSize'];
