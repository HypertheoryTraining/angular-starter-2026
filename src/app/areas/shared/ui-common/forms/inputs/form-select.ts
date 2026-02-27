import { Component, input, model, computed, booleanAttribute } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import type { ClassValue } from 'clsx';

import { mergeClasses } from '@ht/shared/util-components/merge-classes';

import {
  selectVariants,
  type HtSelectColorVariants,
  type HtSelectSizeVariants,
  type HtSelectTypeVariants,
} from './select-variants';

/**
 * A reusable select component that works with Angular Signal Forms.
 * Follows DaisyUI styling conventions with variant support.
 *
 * @example
 * ```html
 * <app-ui-form-select
 *   id="position"
 *   label="Position"
 *   [options]="positions"
 *   htSize="lg"
 *   htColor="primary"
 * />
 * ```
 */
@Component({
  selector: 'app-ui-form-select',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <div class="form-control w-full">
      @if (label()) {
        <label class="label" [for]="id()">
          <span class="label-text font-medium">{{ label() }}</span>
        </label>
      }
      <select
        [value]="value()"
        (change)="onChange($any($event.target).value)"
        (focusin)="touched.set(true)"
        [id]="id()"
        [disabled]="disabled()"
        [required]="required()"
        [class]="selectClasses()"
      >
        @if (placeholder()) {
          <option value="" disabled [selected]="!value()">{{ placeholder() }}</option>
        }
        @for (option of options(); track trackByFn($index, option)) {
          <option [value]="getOptionValue(option)">
            {{ getOptionLabel(option) }}
          </option>
        }
      </select>
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
export class FormSelectComponent<T = string> implements FormValueControl<string> {
  // Variant properties
  readonly htType = input<HtSelectTypeVariants>('default');
  readonly htColor = input<HtSelectColorVariants>('default');
  readonly htSize = input<HtSelectSizeVariants>('default');
  readonly htFull = input(true, { transform: booleanAttribute });
  readonly class = input<ClassValue>('');

  // Form control properties
  readonly id = input.required<string>();
  readonly value = model<string>('');
  readonly label = input<string>('');
  readonly placeholder = input<string>('Select one');
  readonly touched = model<boolean>(false);
  readonly dirty = model<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly hint = input<string>('');
  readonly errorMessage = input<string>('');

  // Select-specific properties
  readonly options = input.required<T[]>();
  readonly optionValue = input<keyof T | ((option: T) => string)>();
  readonly optionLabel = input<keyof T | ((option: T) => string)>();

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });

  protected readonly selectClasses = computed(() => {
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
      selectVariants({
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

  protected getOptionValue(option: T): string {
    const valueConfig = this.optionValue();
    if (!valueConfig) {
      return String(option);
    }
    if (typeof valueConfig === 'function') {
      return valueConfig(option);
    }
    return String(option[valueConfig]);
  }

  protected getOptionLabel(option: T): string {
    const labelConfig = this.optionLabel();
    if (!labelConfig) {
      return String(option);
    }
    if (typeof labelConfig === 'function') {
      return labelConfig(option);
    }
    return String(option[labelConfig]);
  }

  protected trackByFn(index: number, option: T): string | number {
    return this.getOptionValue(option) || index;
  }
}
