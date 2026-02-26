import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@ht/shared/util-components/merge-classes';

export const tooltipVariants = cva(mergeClasses('tooltip'), {
  variants: {
    htPosition: {
      top: 'tooltip-top',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
      right: 'tooltip-right',
    },
    htColor: {
      default: '',
      primary: 'tooltip-primary',
      secondary: 'tooltip-secondary',
      accent: 'tooltip-accent',
      info: 'tooltip-info',
      success: 'tooltip-success',
      warning: 'tooltip-warning',
      error: 'tooltip-error',
    },
    htOpen: {
      true: 'tooltip-open',
    },
  },
  defaultVariants: {
    htPosition: 'top',
    htColor: 'default',
  },
});

export type HtTooltipPositionVariants = VariantProps<typeof tooltipVariants>['htPosition'];
export type HtTooltipColorVariants = VariantProps<typeof tooltipVariants>['htColor'];
