import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import {
  type HtProgressColorVariants,
  type HtProgressSizeVariants,
  progressVariants,
} from './progress-variants';

@Component({
  selector: 'progress[ht-progress]',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'computedClass()',
    '[value]': 'value()',
    '[attr.max]': 'max()',
  },
  template: ``,
  styles: ``,
})
export class HtProgressComponent {
  htColor = input<HtProgressColorVariants>();
  htSize = input<HtProgressSizeVariants>();
  value = input<number>();
  max = input<number>(100);

  computedClass = computed(() =>
    progressVariants({
      htColor: this.htColor(),
      htSize: this.htSize(),
    }),
  );
}
