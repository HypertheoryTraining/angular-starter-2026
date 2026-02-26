import { Component, computed, input, signal, ViewEncapsulation } from '@angular/core';
import {
  type HtCheckboxColorVariants,
  type HtCheckboxSizeVariants,
  checkboxVariants,
} from './checkbox-variants';

@Component({
  selector: 'app-ui-form-checkbox',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="form-control">
      <label class="label cursor-pointer">
        @if (label()) {
          <span class="label-text">{{ label() }}</span>
        }
        <input
          type="checkbox"
          [id]="id()"
          [class]="computedClass()"
          [checked]="checked()"
          [disabled]="disabled()"
          (change)="onChange($event)"
        />
      </label>
      @if (hint()) {
        <label class="label">
          <span class="label-text-alt">{{ hint() }}</span>
        </label>
      }
    </div>
  `,
  styles: ``,
})
export class FormCheckboxComponent {
  id = input.required<string>();
  label = input<string>();
  htColor = input<HtCheckboxColorVariants>();
  htSize = input<HtCheckboxSizeVariants>();
  disabled = input<boolean>(false);
  hint = input<string>();
  initialChecked = input<boolean>(false);

  checked = signal(this.initialChecked());

  computedClass = computed(() =>
    checkboxVariants({
      htColor: this.htColor(),
      htSize: this.htSize(),
    }),
  );

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked.set(target.checked);
  }
}
