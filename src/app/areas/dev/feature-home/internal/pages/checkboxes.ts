import { Component } from '@angular/core';
import { FormCheckboxComponent } from '@ht/shared/ui-common/forms/checkbox/form-checkbox';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-checkboxes-page',
  imports: [PageLayout, FormCheckboxComponent, DemoTabsComponent],
  template: `<app-ui-page title="Checkboxes">
    <div class="space-y-8 p-4">
      <!-- Checkbox Colors -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Checkbox Colors</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-checkbox id="check-default" label="Default" />
<app-ui-form-checkbox id="check-primary" label="Primary" htColor="primary" />
<app-ui-form-checkbox id="check-secondary" label="Secondary" htColor="secondary" />
<app-ui-form-checkbox id="check-accent" label="Accent" htColor="accent" />
<app-ui-form-checkbox id="check-info" label="Info" htColor="info" />
<app-ui-form-checkbox id="check-success" label="Success" htColor="success" />
<app-ui-form-checkbox id="check-warning" label="Warning" htColor="warning" />
<app-ui-form-checkbox id="check-error" label="Error" htColor="error" />'
        >
          <div class="space-y-3 max-w-md">
            <app-ui-form-checkbox id="check-default" label="Default" />
            <app-ui-form-checkbox id="check-primary" label="Primary" htColor="primary" />
            <app-ui-form-checkbox id="check-secondary" label="Secondary" htColor="secondary" />
            <app-ui-form-checkbox id="check-accent" label="Accent" htColor="accent" />
            <app-ui-form-checkbox id="check-info" label="Info" htColor="info" />
            <app-ui-form-checkbox id="check-success" label="Success" htColor="success" />
            <app-ui-form-checkbox id="check-warning" label="Warning" htColor="warning" />
            <app-ui-form-checkbox id="check-error" label="Error" htColor="error" />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Checkbox Sizes -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Checkbox Sizes</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-checkbox id="check-xs" label="Extra Small" htSize="xs" htColor="primary" />
<app-ui-form-checkbox id="check-sm" label="Small" htSize="sm" htColor="primary" />
<app-ui-form-checkbox id="check-md" label="Medium (Default)" htSize="md" htColor="primary" />
<app-ui-form-checkbox id="check-lg" label="Large" htSize="lg" htColor="primary" />'
        >
          <div class="space-y-3 max-w-md">
            <app-ui-form-checkbox id="check-xs" label="Extra Small" htSize="xs" htColor="primary" />
            <app-ui-form-checkbox id="check-sm" label="Small" htSize="sm" htColor="primary" />
            <app-ui-form-checkbox
              id="check-md"
              label="Medium (Default)"
              htSize="md"
              htColor="primary"
            />
            <app-ui-form-checkbox id="check-lg" label="Large" htSize="lg" htColor="primary" />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Checkbox with Hint -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Checkbox with Hint</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-checkbox
  id="check-hint"
  label="Accept Terms and Conditions"
  hint="You must accept the terms to continue"
  htColor="primary"
/>

<app-ui-form-checkbox
  id="check-newsletter"
  label="Subscribe to newsletter"
  hint="Receive weekly updates about new features"
  htColor="accent"
/>'
        >
          <div class="space-y-4 max-w-md">
            <app-ui-form-checkbox
              id="check-hint"
              label="Accept Terms and Conditions"
              hint="You must accept the terms to continue"
              htColor="primary"
            />
            <app-ui-form-checkbox
              id="check-newsletter"
              label="Subscribe to newsletter"
              hint="Receive weekly updates about new features"
              htColor="accent"
            />
          </div>
        </app-ui-demo-tabs>
      </div>

      <!-- Checkbox States -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Checkbox States</h3>
        <app-ui-demo-tabs
          htmlSource='<app-ui-form-checkbox id="check-normal" label="Normal" htColor="primary" />
<app-ui-form-checkbox id="check-checked" label="Checked" htColor="primary" [initialChecked]="true" />
<app-ui-form-checkbox id="check-disabled" label="Disabled" [disabled]="true" />
<app-ui-form-checkbox id="check-disabled-checked" label="Disabled & Checked" [disabled]="true" [initialChecked]="true" />'
        >
          <div class="space-y-3 max-w-md">
            <app-ui-form-checkbox id="check-normal" label="Normal" htColor="primary" />
            <app-ui-form-checkbox
              id="check-checked"
              label="Checked"
              htColor="primary"
              [initialChecked]="true"
            />
            <app-ui-form-checkbox id="check-disabled" label="Disabled" [disabled]="true" />
            <app-ui-form-checkbox
              id="check-disabled-checked"
              label="Disabled & Checked"
              [disabled]="true"
              [initialChecked]="true"
            />
          </div>
        </app-ui-demo-tabs>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CheckboxesPage {}
