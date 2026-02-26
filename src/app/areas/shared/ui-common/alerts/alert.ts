import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';

import type { ClassValue } from 'clsx';

import { mergeClasses } from '@ht/shared/util-components/merge-classes';

import { alertVariants, type HtAlertTypeVariants } from './alert-variants';

@Component({
  selector: 'ht-alert, div[ht-alert]',
  imports: [],
  template: ` <ng-content /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes()',
    role: 'alert',
  },
  exportAs: 'htAlert',
})
export class HtAlertComponent {
  readonly htType = input<HtAlertTypeVariants>('default');
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(
      alertVariants({
        htType: this.htType(),
      }),
      this.class(),
    ),
  );
}
