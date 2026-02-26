import { mergeClasses } from '@ht/shared/util-components/merge-classes';
import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(mergeClasses('alert'), {
  variants: {
    htType: {
      default: '',
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
    },
  },
  defaultVariants: {
    htType: 'default',
  },
});

export type HtAlertTypeVariants = NonNullable<VariantProps<typeof alertVariants>['htType']>;
