import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@ht/shared/util-components/merge-classes';

export const skeletonVariants = cva(mergeClasses('skeleton'), {
  variants: {
    htType: {
      default: '',
      circle: 'rounded-full',
      rectangle: 'rounded-none',
    },
    htSize: {
      xs: 'h-8',
      sm: 'h-12',
      md: 'h-16',
      lg: 'h-24',
      xl: 'h-32',
    },
    htWidth: {
      full: 'w-full',
      '3/4': 'w-3/4',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '1/4': 'w-1/4',
    },
  },
  defaultVariants: {
    htType: 'default',
    htSize: 'md',
  },
});

export type HtSkeletonTypeVariants = VariantProps<typeof skeletonVariants>['htType'];
export type HtSkeletonSizeVariants = VariantProps<typeof skeletonVariants>['htSize'];
export type HtSkeletonWidthVariants = VariantProps<typeof skeletonVariants>['htWidth'];
