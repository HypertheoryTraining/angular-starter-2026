import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';

import type { ClassValue } from 'clsx';

import { mergeClasses } from '@ht/shared/util-components/merge-classes';

import {
  badgeVariants,
  type HtBadgeSizeVariants,
  type HtBadgeTypeVariants,
} from './badge-variants';

@Component({
  selector: 'ht-badge, span[ht-badge]',
  imports: [],
  template: ` <ng-content /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes()',
  },
  exportAs: 'htBadge',
})
export class HtBadgeComponent {
  readonly htType = input<HtBadgeTypeVariants>('default');
  readonly htSize = input<HtBadgeSizeVariants>('default');
  readonly class = input<ClassValue>('rounded-2xl hover:scale-105');
  readonly htOutline = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    mergeClasses(
      badgeVariants({
        htType: this.htType(),
        hSize: this.htSize(),
        hOutline: this.htOutline(),
      }),
      this.class(),
    ),
  );
}
