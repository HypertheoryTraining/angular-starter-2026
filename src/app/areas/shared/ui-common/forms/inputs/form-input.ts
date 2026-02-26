import { Component, input, model, computed, booleanAttribute } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import type { ClassValue } from 'clsx';

import { mergeClasses } from '@ht/shared/util-components/merge-classes';

import {
  inputVariants,
  type HtInputColorVariants,
  type HtInputSizeVariants,
  type HtInputTypeVariants,
} from './input-variants';

/**
 * A reusable form input component that works with Angular Signal Forms.
 * Follows DaisyUI styling conventions with variant support.
 *
 * @example
 * ```html
 * <app-ui-form-input
 *   id="firstName"
 *   label="First Name"
 *   placeholder="Enter your first name"
 *   htSize="lg"
 *   htColor="primary"
 * />
 * ```
 */
@Component({
  selector: 'app-ui-form-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <div class="form-control w-full">
      @if (label()) {
        <label class="label" [for]="id()">
          <span class="label-text font-medium">{{ label() }}</span>
        </label>
      }
      <input
        [value]="value()"
        (input)="onChange($any($event.target).value)"
        (focusin)="touched.set(true)"
        [type]="type()"
        [id]="id()"
        [placeholder]="placeholder()"
        [autocomplete]="autocomplete()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [hidden]="hidden()"
        [required]="required()"
        [class]="inputClasses()"
      />
      @if (hint()) {
        <label class="label">
          <span class="label-text-alt">{{ hint() }}</span>
        </label>
      }
      @if (invalid() && (dirty() || touched()) && errorMessage()) {
        <label class="label">
          <span class="label-text-alt text-error">{{ errorMessage() }}</span>
        </label>
      }
    </div>
  `,
})
export class FormInputComponent implements FormValueControl<string> {
  // Variant properties
  readonly htType = input<HtInputTypeVariants>('default');
  readonly htColor = input<HtInputColorVariants>('default');
  readonly htSize = input<HtInputSizeVariants>('default');
  readonly htFull = input(true, { transform: booleanAttribute });
  readonly class = input<ClassValue>('');

  // Form control properties
  readonly id = input.required<string>();
  readonly value = model<string>('');
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly touched = model<boolean>(false);
  readonly dirty = model<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly type = input<'text' | 'email' | 'password' | 'number' | 'tel' | 'url'>('text');
  readonly autocomplete = input<string>('');
  readonly hint = input<string>('');
  readonly errorMessage = input<string>('');

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly hidden = input(false, { transform: booleanAttribute });

  protected readonly inputClasses = computed(() => {
    // Determine color based on validation state if not explicitly set
    let color = this.htColor();
    if (color === 'default') {
      if (this.invalid() && (this.dirty() || this.touched())) {
        color = 'error';
      } else if (!this.invalid() && this.dirty() && this.value()) {
        color = 'success';
      }
    }

    return mergeClasses(
      inputVariants({
        htType: this.htType(),
        htColor: color,
        hSize: this.htSize(),
        hFull: this.htFull(),
      }),
      this.class(),
    );
  });

  onChange(value: string): void {
    this.value.set(value);
    this.dirty.set(true);
  }
}
