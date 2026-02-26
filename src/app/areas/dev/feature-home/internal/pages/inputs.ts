import { Component } from '@angular/core';
import { FormInputComponent } from '@ht/shared/ui-common/forms/inputs/form-input';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-inputs-page',
  imports: [PageLayout, FormInputComponent, DemoTabsComponent],
  template: `<app-ui-page title="Inputs">
    <div class="space-y-8 p-4">
      <!-- Input Types -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Input Types</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-input
  id="input-bordered"
  label="Bordered Input"
  placeholder="Type here"
  htType="bordered"
/>

<app-ui-form-input
  id="input-ghost"
  label="Ghost Input"
  placeholder="Type here"
  htType="ghost"
/>'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-input
              id="input-bordered"
              label="Bordered Input"
              placeholder="Type here"
              htType="bordered"
            />
            <app-ui-form-input
              id="input-ghost"
              label="Ghost Input"
              placeholder="Type here"
              htType="ghost"
            />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Input Colors -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Input Colors</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-input id="input-primary" label="Primary" placeholder="Type here" htColor="primary" />
<app-ui-form-input id="input-secondary" label="Secondary" placeholder="Type here" htColor="secondary" />
<app-ui-form-input id="input-accent" label="Accent" placeholder="Type here" htColor="accent" />
<app-ui-form-input id="input-info" label="Info" placeholder="Type here" htColor="info" />
<app-ui-form-input id="input-success" label="Success" placeholder="Type here" htColor="success" />
<app-ui-form-input id="input-warning" label="Warning" placeholder="Type here" htColor="warning" />
<app-ui-form-input id="input-error" label="Error" placeholder="Type here" htColor="error" />'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-input
              id="input-primary"
              label="Primary"
              placeholder="Type here"
              htColor="primary"
            />
            <app-ui-form-input
              id="input-secondary"
              label="Secondary"
              placeholder="Type here"
              htColor="secondary"
            />
            <app-ui-form-input
              id="input-accent"
              label="Accent"
              placeholder="Type here"
              htColor="accent"
            />
            <app-ui-form-input
              id="input-info"
              label="Info"
              placeholder="Type here"
              htColor="info"
            />
            <app-ui-form-input
              id="input-success"
              label="Success"
              placeholder="Type here"
              htColor="success"
            />
            <app-ui-form-input
              id="input-warning"
              label="Warning"
              placeholder="Type here"
              htColor="warning"
            />
            <app-ui-form-input
              id="input-error"
              label="Error"
              placeholder="Type here"
              htColor="error"
            />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Input Sizes -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Input Sizes</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-input id="input-xs" label="Extra Small" placeholder="XS" htSize="xs" />
<app-ui-form-input id="input-sm" label="Small" placeholder="SM" htSize="sm" />
<app-ui-form-input id="input-md" label="Medium (Default)" placeholder="MD" htSize="md" />
<app-ui-form-input id="input-lg" label="Large" placeholder="LG" htSize="lg" />
<app-ui-form-input id="input-xl" label="Extra Large" placeholder="XL" htSize="xl" />'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-input id="input-xs" label="Extra Small" placeholder="XS" htSize="xs" />
            <app-ui-form-input id="input-sm" label="Small" placeholder="SM" htSize="sm" />
            <app-ui-form-input
              id="input-md"
              label="Medium (Default)"
              placeholder="MD"
              htSize="md"
            />
            <app-ui-form-input id="input-lg" label="Large" placeholder="LG" htSize="lg" />
            <app-ui-form-input id="input-xl" label="Extra Large" placeholder="XL" htSize="xl" />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Input States and Validation -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Input States and Validation</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-input id="input-normal" label="Normal" placeholder="Regular input" />

<app-ui-form-input id="input-disabled" label="Disabled" placeholder="Cannot type here" disabled />

<app-ui-form-input id="input-readonly" label="Read-only" placeholder="Read-only value" readonly />

<app-ui-form-input
  id="input-with-hint"
  label="With Hint"
  placeholder="Type something"
  hint="This is a helpful hint text"
/>

<app-ui-form-input
  id="input-error-msg"
  label="With Error Message"
  placeholder="Type something"
  htColor="error"
  errorMessage="This field is required"
/>'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-input id="input-normal" label="Normal" placeholder="Regular input" />
            <app-ui-form-input
              id="input-disabled"
              label="Disabled"
              placeholder="Cannot type here"
              disabled
            />
            <app-ui-form-input
              id="input-readonly"
              label="Read-only"
              placeholder="Read-only value"
              readonly
            />
            <app-ui-form-input
              id="input-with-hint"
              label="With Hint"
              placeholder="Type something"
              hint="This is a helpful hint text"
            />
            <app-ui-form-input
              id="input-error-msg"
              label="With Error Message"
              placeholder="Type something"
              htColor="error"
              errorMessage="This field is required"
            />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Input Types (HTML5) -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">HTML5 Input Types</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-input id="input-email" label="Email" placeholder="you@example.com" type="email" />
<app-ui-form-input id="input-password" label="Password" placeholder="••••••••" type="password" />
<app-ui-form-input id="input-number" label="Number" placeholder="123" type="number" />
<app-ui-form-input id="input-tel" label="Telephone" placeholder="555-1234" type="tel" />
<app-ui-form-input id="input-url" label="URL" placeholder="https://example.com" type="url" />'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-input
              id="input-email"
              label="Email"
              placeholder="you@example.com"
              type="email"
            />
            <app-ui-form-input
              id="input-password"
              label="Password"
              placeholder="••••••••"
              type="password"
            />
            <app-ui-form-input id="input-number" label="Number" placeholder="123" type="number" />
            <app-ui-form-input id="input-tel" label="Telephone" placeholder="555-1234" type="tel" />
            <app-ui-form-input
              id="input-url"
              label="URL"
              placeholder="https://example.com"
              type="url"
            />
          </div>
        </app-ui-demo-tabs>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class InputsPage {}
