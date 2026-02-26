import { mergeClasses } from '@ht/shared/util-components/merge-classes';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(mergeClasses('badge'), {
  variants: {
    htType: {
      default: 'badge-neutral',
      neutral: 'badge-neutral',
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
      ghost: 'badge-ghost',
    },
    hSize: {
      default: 'badge-md',
      xs: 'badge-xs',
      sm: 'badge-sm',
      md: 'badge-md',
      lg: 'badge-lg',
    },
    hOutline: {
      true: 'badge-outline',
    },
  },
  defaultVariants: {
    htType: 'default',
    hSize: 'default',
  },
});

export type HtBadgeTypeVariants = NonNullable<VariantProps<typeof badgeVariants>['htType']>;
export type HtBadgeSizeVariants = NonNullable<VariantProps<typeof badgeVariants>['hSize']>;
