import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import {
  type HtSkeletonSizeVariants,
  type HtSkeletonTypeVariants,
  type HtSkeletonWidthVariants,
  skeletonVariants,
} from './skeleton-variants';

@Component({
  selector: 'ht-skeleton, div[ht-skeleton]',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'computedClass()',
  },
  template: `<ng-content />`,
  styles: ``,
})
export class HtSkeletonComponent {
  htType = input<HtSkeletonTypeVariants>();
  htSize = input<HtSkeletonSizeVariants>();
  htWidth = input<HtSkeletonWidthVariants>();

  computedClass = computed(() =>
    skeletonVariants({
      htType: this.htType(),
      htSize: this.htSize(),
      htWidth: this.htWidth(),
    }),
  );
}
