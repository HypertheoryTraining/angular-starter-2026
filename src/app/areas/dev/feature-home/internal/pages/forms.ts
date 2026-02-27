import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { FormInputComponent } from '@ht/shared/ui-common/forms/inputs/form-input';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

const Jobs = ['Developer', 'Engineer', 'Designer', 'Manager'] as const;
type HiringRequest = {
  name: string;
  position: (typeof Jobs)[number];
  startDate: Date;
  isFullTime: boolean;
  contactInformation: {
    email: string;
    phone: string;
  };
};
@Component({
  selector: 'app-dev-pages-forms',
  imports: [PageLayout, FormRoot, FormInputComponent, HtButtonComponent, FormField, JsonPipe],
  template: `<app-ui-page title="Signal Forms Example">
    <form [formRoot]="form" class="space-y-6 max-w-2xl">
      <div class="form-field">
        <app-ui-form-input label="Name" [formField]="form.name" id="name"></app-ui-form-input>
      </div>

      <div class="form-field">
        <label class="label" for="position">
          <span class="label-text">Position</span>
        </label>
        <select
          formControlName="position"
          id="position"
          class="select select-bordered w-full"
          [formField]="form.position"
        >
          <option>Select one</option>
          @for (job of jobs; track job) {
            <option [value]="job">{{ job }}</option>
          }
        </select>
      </div>

      <div class="form-field">
        <label class="label" for="startDate">
          <span class="label-text">Start Date</span>
        </label>
        <input
          type="date"
          [formField]="form.startDate"
          formControlName="startDate"
          id="startDate"
          class="input input-bordered w-full"
        />
      </div>

      <div class="form-field">
        <label class="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            formControlName="isFullTime"
            id="isFullTime"
            class="checkbox"
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
            type="email"
          ></app-ui-form-input>
        </div>

        <div class="form-field">
          <app-ui-form-input
            label="Phone"
            formControlName="contactInformation.phone"
            id="phone"
            type="tel"
            [formField]="form.contactInformation.phone"
          ></app-ui-form-input>
        </div>
      </fieldset>

      <div class="flex gap-4">
        <button ht-button [htAriaDisabled]="form().submitting()" htType="primary" type="submit">
          Submit
        </button>
        <button ht-button htType="secondary" type="reset">Reset</button>
      </div>
      <pre>
          {{ model() | json }}
        </pre
      >
    </form>
  </app-ui-page>`,
  styles: ``,
})
export class FormsPage {
  protected readonly jobs = Jobs;

  protected readonly model = signal<HiringRequest>({
    name: '',
    position: Jobs[0],
    startDate: new Date(),
    isFullTime: false,
    contactInformation: {
      email: '',
      phone: '',
    },
  });

  form = form(
    this.model,
    (schema) => {
      required(schema.name);
      required(schema.position);
      required(schema.startDate);
      required(schema.isFullTime);
      required(schema.contactInformation.email);
      required(schema.contactInformation.phone);
    },
    {
      name: 'HiringForm',

      submission: {
        onInvalid(field, detail) {
          console.log('Form Invalid', field, detail);
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
