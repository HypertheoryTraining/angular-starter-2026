import { Component, effect, ElementRef, input, untracked, viewChild } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

/**
 * A reusable component for displaying a summary of all form validation errors.
 * Shows an alert with all field errors when the form is submitted and invalid.
 * Uses fade-in animation for smooth appearance.
 *
 * @example
 * ```html
 * <app-ui-form-error-summary [form]="form" [submitted]="submitted()" />
 * ```
 */
@Component({
  selector: 'app-ui-form-error-summary',
  standalone: true,
  template: `
    <div tabindex="-1" #es>
      @if (submitted() && formInstance.invalid()) {
        <div class="alert alert-error animate-fade-in" role="alert" aria-live="assertive">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold">Please correct the following errors:</h3>
            <ul class="mt-2 list-disc list-inside">
              @for (error of formInstance.errorSummary(); track error) {
                <li>{{ error.message || error.kind }}</li>
              }
            </ul>
          </div>
        </div>
      }
    </div>
  `,
})
export class FormErrorSummaryComponent {
  protected readonly summary = viewChild.required<ElementRef>('es');

  readonly form = input.required<FieldState<unknown>>();
  readonly submitted = input.required<boolean>();
  focus() {
    console.log('Focusing error summary', this.summary());
    this.summary()?.nativeElement.focus();
  }

  protected get formInstance() {
    return this.form();
  }
}
