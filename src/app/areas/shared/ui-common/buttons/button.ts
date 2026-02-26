import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  type OnDestroy,
  ElementRef,
  inject,
  input,
  signal,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';

import type { ClassValue } from 'clsx';

import { mergeClasses } from '@ht/shared/util-components/merge-classes';

import {
  buttonVariants,
  type HtButtonShapeVariants,
  type HtButtonSizeVariants,
  type HtButtonTypeVariants,
} from './button-variants';

@Component({
  selector: 'ht-button, button[ht-button], a[ht-button]',
  imports: [],
  template: ` <ng-content /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes()',
    '[attr.data-icon-only]': 'iconOnly() || null',
    '[attr.data-disabled]': 'isNotInsideOfButtonOrLink() && htDisabled() || null',
    '[attr.aria-disabled]': 'isNotInsideOfButtonOrLink() && htDisabled() || null',
    '[attr.disabled]': 'isNotInsideOfButtonOrLink() && htDisabled() ? "" : null',
    '[attr.role]': 'isNotInsideOfButtonOrLink() ? "button" : null',
    '[attr.tabindex]': 'isNotInsideOfButtonOrLink() ? "0" : null',
  },
  exportAs: 'htButton',
})
export class HtButtonComponent implements OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly htType = input<HtButtonTypeVariants>('default');
  readonly htSize = input<HtButtonSizeVariants>('default');
  readonly htShape = input<HtButtonShapeVariants>('default');
  readonly class = input<ClassValue>('');
  readonly htFull = input(false, { transform: booleanAttribute });
  readonly htLoading = input(false, { transform: booleanAttribute });
  readonly htDisabled = input(false, { transform: booleanAttribute });

  private readonly iconOnlyState = signal(false);
  readonly iconOnly = this.iconOnlyState.asReadonly();

  private _mutationObserver: MutationObserver | null = null;

  constructor() {
    afterNextRender(() => {
      if (typeof window === 'undefined' || typeof MutationObserver === 'undefined') {
        return;
      }

      const check = () => {
        const el = this.elementRef.nativeElement;

        const children = Array.from<Node>(el.childNodes);
        const hasText = children.some((node) => {
          if (node.nodeType === 3) {
            return node.textContent?.trim() !== '';
          }
          if (node.nodeType === 1) {
            const element = node as HTMLElement;
            if (element.matches('z-icon, [z-icon]')) {
              return false;
            }
            return element.textContent?.trim() !== '';
          }
          return false;
        });

        this.iconOnlyState.set(!hasText);
      };

      check();
      this._mutationObserver = new MutationObserver(check);
      this._mutationObserver.observe(this.elementRef.nativeElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    });
  }

  ngOnDestroy(): void {
    if (this._mutationObserver) {
      this._mutationObserver.disconnect();
      this._mutationObserver = null;
    }
  }

  protected readonly classes = computed(() =>
    mergeClasses(
      buttonVariants({
        htType: this.htType(),
        hSize: this.htSize(),
        hShape: this.htShape(),
        hFull: this.htFull(),
        hLoading: this.htLoading(),
        hDisabled: this.htDisabled(),
      }),
      this.class(),
    ),
  );

  protected readonly isNotInsideOfButtonOrLink = computed(() => {
    // Evaluated once; assumes component parent doesn't change after mount
    const htButtonElement = this.elementRef.nativeElement;
    if (htButtonElement.parentElement) {
      const { tagName } = htButtonElement.parentElement;
      return tagName !== 'BUTTON' && tagName !== 'A';
    }
    return true;
  });
}
