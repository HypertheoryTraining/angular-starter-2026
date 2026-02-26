import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@ht/shared/util-components/merge-classes';

export const checkboxVariants = cva(mergeClasses('checkbox'), {
  variants: {
    htColor: {
      default: '',
      primary: 'checkbox-primary',
      secondary: 'checkbox-secondary',
      accent: 'checkbox-accent',
      info: 'checkbox-info',
      success: 'checkbox-success',
      warning: 'checkbox-warning',
      error: 'checkbox-error',
    },
    htSize: {
      xs: 'checkbox-xs',
      sm: 'checkbox-sm',
      md: 'checkbox-md',
      lg: 'checkbox-lg',
    },
  },
  defaultVariants: {
    htColor: 'default',
  },
});

export type HtCheckboxColorVariants = VariantProps<typeof checkboxVariants>['htColor'];
export type HtCheckboxSizeVariants = VariantProps<typeof checkboxVariants>['htSize'];
