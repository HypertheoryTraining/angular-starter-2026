import { Component, computed, input, ViewEncapsulation, booleanAttribute } from '@angular/core';
import {
  type HtTooltipColorVariants,
  type HtTooltipPositionVariants,
  tooltipVariants,
} from './tooltip-variants';

@Component({
  selector: 'ht-tooltip',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'computedClass()',
    '[attr.data-tip]': 'text()',
  },
  template: `<ng-content />`,
  styles: ``,
})
export class HtTooltipComponent {
  text = input.required<string>();
  htPosition = input<HtTooltipPositionVariants>();
  htColor = input<HtTooltipColorVariants>();
  htOpen = input(false, { transform: booleanAttribute });

  computedClass = computed(() =>
    tooltipVariants({
      htPosition: this.htPosition(),
      htColor: this.htColor(),
      htOpen: this.htOpen() ? true : undefined,
    }),
  );
}
