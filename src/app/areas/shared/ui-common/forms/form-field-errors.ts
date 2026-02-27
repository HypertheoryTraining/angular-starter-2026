import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

/**
 * A reusable component for displaying form field validation errors.
 * Shows all errors when the field is invalid and has been interacted with (dirty or touched).
 * Uses fade-in animation for smooth appearance.
 *
 * @example
 * ```html
 * <app-ui-form-field-errors [formField]="form.name" />
 * ```
 */
@Component({
  selector: 'app-ui-form-field-errors',
  standalone: true,
  template: `
    @if (
      field().invalid() && (field().dirty() || field().touched()) && field().errors().length > 0
    ) {
      <div class="space-y-1 animate-fade-in">
        @for (error of field().errors(); track error) {
          <span class="text-sm text-error block">{{ error.message || error.kind }}</span>
        }
      </div>
    }
  `,
})
export class FormFieldErrorsComponent {
  // Accept any type since Signal Forms FieldTree doesn't match FormValueControl
  readonly formField = input.required<FieldTree<unknown>>();

  protected get field() {
    return this.formField();
  }
}
