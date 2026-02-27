import { Component, ElementRef, signal, viewChild } from '@angular/core';
import {
  email,
  form,
  FormField,
  FormRoot,
  maxLength,
  minLength,
  pattern,
  required,
  validate,
} from '@angular/forms/signals';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { FormErrorSummaryComponent } from '@ht/shared/ui-common/forms/form-error-summary';
import { FormFieldErrorsComponent } from '@ht/shared/ui-common/forms/form-field-errors';
import { FormDateInputComponent } from '@ht/shared/ui-common/forms/inputs/form-date-input';
import { FormInputComponent } from '@ht/shared/ui-common/forms/inputs/form-input';
import { FormSelectComponent } from '@ht/shared/ui-common/forms/inputs/form-select';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

const Jobs = ['Developer', 'Engineer', 'Designer', 'Manager'] as const;
type HiringRequest = {
  name: string;
  position: (typeof Jobs)[number];
  startDate: Date | null;
  isFullTime: boolean;
  contactInformation: {
    email: string;
    phone: string;
  };
};
@Component({
  selector: 'app-dev-pages-forms',
  imports: [
    PageLayout,
    FormRoot,
    FormInputComponent,
    FormDateInputComponent,
    FormSelectComponent,
    FormErrorSummaryComponent,
    FormFieldErrorsComponent,
    HtButtonComponent,
    FormField,
  ],
  template: `<app-ui-page title="Signal Forms Example">
    <form [formRoot]="form" class="space-y-6 max-w-2xl">
      <app-ui-form-error-summary #summary [form]="form()" [submitted]="submitted()" />
      <div class="form-field">
        <app-ui-form-input
          label="Name"
          [formField]="form.name"
          id="name"
          htSize="sm"
        ></app-ui-form-input>
        <app-ui-form-field-errors [formField]="form.name" />
      </div>

      <div class="form-field">
        <app-ui-form-select
          label="Position"
          [formField]="form.position"
          id="position"
          htSize="sm"
          [options]="jobs"
          placeholder="Select one"
        />
        <app-ui-form-field-errors [formField]="form.position" />
      </div>

      <div class="form-field">
        <app-ui-form-date-input
          label="Start Date"
          [formField]="$any(form.startDate)"
          id="startDate"
          htSize="sm"
        />
        <app-ui-form-field-errors [formField]="$any(form.startDate)" />
      </div>

      <div class="form-field">
        <label class="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            formControlName="isFullTime"
            id="isFullTime"
            class="checkbox checkbox-xs checkbox-primary"
            [formField]="form.isFullTime"
          />
          <span class="label-text">Full Time Position</span>
        </label>
      </div>

      <fieldset class="border border-base-300 rounded-lg p-4 space-y-4">
        <legend class="text-lg font-semibold px-2">Contact Information</legend>

        <div class="form-field">
          <app-ui-form-input
            label="Email"
            [formField]="form.contactInformation.email"
            id="email"
            htSize="sm"
            type="email"
          ></app-ui-form-input>
          <app-ui-form-field-errors [formField]="form.contactInformation.email" />
        </div>

        <div class="form-field">
          <app-ui-form-input
            label="Phone"
            formControlName="contactInformation.phone"
            id="phone"
            type="tel"
            htSize="sm"
            [formField]="form.contactInformation.phone"
          ></app-ui-form-input>
          <app-ui-form-field-errors [formField]="form.contactInformation.phone" />
        </div>
      </fieldset>

      <div class="flex gap-4">
        <button ht-button [htAriaDisabled]="form().submitting()" htType="primary" type="submit">
          Submit
        </button>
        <button ht-button htType="secondary" type="reset">Reset</button>
      </div>
    </form>
  </app-ui-page>`,
  styles: ``,
})
export class FormsPage {
  protected readonly jobs = [...Jobs]; // Create mutable copy for select component
  protected readonly submitted = signal(false);
  protected readonly summary = viewChild<FormErrorSummaryComponent>('summary');
  protected readonly model = signal<HiringRequest>({
    name: '',
    position: '' as (typeof Jobs)[number],
    startDate: null,
    isFullTime: false,
    contactInformation: {
      email: '',
      phone: '',
    },
  });

  form = form(
    this.model,
    (schema) => {
      required(schema.name, { message: 'Name is required' });
      minLength(schema.name, 3, { message: 'Name must be at least 3 characters long' });
      maxLength(schema.name, 15, { message: 'Name must be at most 15 characters long' });
      required(schema.position, { message: 'Position is required' });
      required(schema.startDate, { message: 'Start Date is required' });
      validate(schema.startDate, ({ value }) => {
        const d = value() as unknown as string | null;

        if (d === null) {
          return null;
        }

        const d2 = new Date(d);
        if (d2 < new Date()) {
          return { kind: 'startDateInPast', message: 'Start Date cannot be in the past' };
        }

        return null;
      });
      required(schema.contactInformation.email, { message: 'Email is required' });
      email(schema.contactInformation.email, { message: 'Please enter a valid email address' });
      required(schema.contactInformation.phone, { message: 'Phone number is required' });
      pattern(schema.contactInformation.phone, /^\d{3}-\d{4}$/, {
        message: 'Phone number must be in the format 555-1234',
      });
    },
    {
      name: 'HiringForm',

      submission: {
        onInvalid: () => {
          this.submitted.set(true);
          this.summary()?.focus();
        },
        action: async (f) => {
          if (f().valid()) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
          return undefined;
        },
      },
    },
  );
}
