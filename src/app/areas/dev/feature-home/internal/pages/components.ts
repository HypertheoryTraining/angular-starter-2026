import { Component } from '@angular/core';
import { HtAlertComponent } from '@ht/shared/ui-common/alerts/alert';
import { HtBadgeComponent } from '@ht/shared/ui-common/badges/badge';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { FormCheckboxComponent } from '@ht/shared/ui-common/forms/checkbox/form-checkbox';
import { FormInputComponent } from '@ht/shared/ui-common/forms/inputs/form-input';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { HtProgressComponent } from '@ht/shared/ui-common/progress/progress';
import { HtSkeletonComponent } from '@ht/shared/ui-common/skeleton/skeleton';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';
import { HtTooltipComponent } from '@ht/shared/ui-common/tooltip/tooltip';

@Component({
  selector: 'app-home-pages-components',
  imports: [
    PageLayout,
    HtButtonComponent,
    HtBadgeComponent,
    HtAlertComponent,
    FormInputComponent,
    FormCheckboxComponent,
    HtSkeletonComponent,
    HtProgressComponent,
    HtTooltipComponent,
    DemoTabsComponent,
  ],
  template: `<app-ui-page title="Component Demos">
    <div class="space-y-12 p-4">
      <!-- Button Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Buttons</h2>

        <!-- Button Types -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Button Types</h3>
          <app-ui-demo-tabs
            htmlSource='<div class="flex flex-wrap gap-2">
  <button ht-button>Default</button>
  <button ht-button htType="neutral">Neutral</button>
  <button ht-button htType="primary">Primary</button>
  <button ht-button htType="secondary">Secondary</button>
  <button ht-button htType="accent">Accent</button>
  <button ht-button htType="info">Info</button>
  <button ht-button htType="success">Success</button>
  <button ht-button htType="warning">Warning</button>
  <button ht-button htType="error">Error</button>
</div>'
          >
            <div class="flex flex-wrap gap-2">
              <button ht-button>Default</button>
              <button ht-button htType="neutral">Neutral</button>
              <button ht-button htType="primary">Primary</button>
              <button ht-button htType="secondary">Secondary</button>
              <button ht-button htType="accent">Accent</button>
              <button ht-button htType="info">Info</button>
              <button ht-button htType="success">Success</button>
              <button ht-button htType="warning">Warning</button>
              <button ht-button htType="error">Error</button>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Button Sizes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Button Sizes</h3>
          <app-ui-demo-tabs
            htmlSource='<button ht-button htSize="xs">Extra Small</button>
<button ht-button htSize="sm">Small</button>
<button ht-button>Default</button>
<button ht-button htSize="lg">Large</button>
<button ht-button htSize="xl">Extra Large</button>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <button ht-button htSize="xs">Extra Small</button>
              <button ht-button htSize="sm">Small</button>
              <button ht-button>Default</button>
              <button ht-button htSize="lg">Large</button>
              <button ht-button htSize="xl">Extra Large</button>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Button Shapes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Button Shapes</h3>
          <app-ui-demo-tabs
            htmlSource='<button ht-button>Default</button>
<button ht-button htShape="square">⬜</button>
<button ht-button htShape="circle">●</button>
<button ht-button htShape="wide">Wide Button</button>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <button ht-button>Default</button>
              <button ht-button htShape="square">⬜</button>
              <button ht-button htShape="circle">●</button>
              <button ht-button htShape="wide">Wide Button</button>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Button States -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Button States</h3>
          <app-ui-demo-tabs
            htmlSource='<button ht-button>Normal</button>
<button ht-button htLoading>Loading</button>
<button ht-button htDisabled>Disabled</button>
<button ht-button htType="primary" htLoading>Primary Loading</button>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <button ht-button>Normal</button>
              <button ht-button htLoading>Loading</button>
              <button ht-button htDisabled>Disabled</button>
              <button ht-button htType="primary" htLoading>Primary Loading</button>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Full Width Button -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Full Width Button</h3>
          <app-ui-demo-tabs
            htmlSource='<button ht-button htType="primary" htFull>Full Width Button</button>'
          >
            <button ht-button htType="primary" htFull>Full Width Button</button>
          </app-ui-demo-tabs>
        </div>

        <!-- Button as Link -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Button as Link</h3>
          <app-ui-demo-tabs
            htmlSource='<a ht-button htType="accent" href="#">Link styled as Button</a>'
          >
            <a ht-button htType="accent" href="#">Link styled as Button</a>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Badge Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Badges</h2>

        <!-- Badge Types -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Badge Types</h3>
          <app-ui-demo-tabs
            htmlSource='<span ht-badge>Default</span>
<span ht-badge htType="neutral">Neutral</span>
<span ht-badge htType="primary">Primary</span>
<span ht-badge htType="secondary">Secondary</span>
<span ht-badge htType="accent">Accent</span>
<span ht-badge htType="info">Info</span>
<span ht-badge htType="success">Success</span>
<span ht-badge htType="warning">Warning</span>
<span ht-badge htType="error">Error</span>
<span ht-badge htType="ghost">Ghost</span>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <span ht-badge>Default</span>
              <span ht-badge htType="neutral">Neutral</span>
              <span ht-badge htType="primary">Primary</span>
              <span ht-badge htType="secondary">Secondary</span>
              <span ht-badge htType="accent">Accent</span>
              <span ht-badge htType="info">Info</span>
              <span ht-badge htType="success">Success</span>
              <span ht-badge htType="warning">Warning</span>
              <span ht-badge htType="error">Error</span>
              <span ht-badge htType="ghost">Ghost</span>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Badge Sizes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Badge Sizes</h3>
          <app-ui-demo-tabs
            htmlSource='<span ht-badge htSize="xs" htType="primary">XS</span>
<span ht-badge htSize="sm" htType="primary">SM</span>
<span ht-badge htSize="md" htType="primary">MD</span>
<span ht-badge htSize="lg" htType="primary">LG</span>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <span ht-badge htSize="xs" htType="primary">XS</span>
              <span ht-badge htSize="sm" htType="primary">SM</span>
              <span ht-badge htSize="md" htType="primary">MD</span>
              <span ht-badge htSize="lg" htType="primary">LG</span>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Badge Outline -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Badge Outline</h3>
          <app-ui-demo-tabs
            htmlSource='<span ht-badge htType="primary">Solid</span>
<span ht-badge htType="primary" htOutline>Outline</span>
<span ht-badge htType="secondary" htOutline>Outline</span>
<span ht-badge htType="accent" htOutline>Outline</span>'
          >
            <div class="flex flex-wrap items-center gap-2">
              <span ht-badge htType="primary">Solid</span>
              <span ht-badge htType="primary" htOutline>Outline</span>
              <span ht-badge htType="secondary" htOutline>Outline</span>
              <span ht-badge htType="accent" htOutline>Outline</span>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Badge in Context -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Badges in Context</h3>
          <app-ui-demo-tabs
            htmlSource='<span class="text-lg">Notifications </span>
<span ht-badge htType="error" htSize="sm">5</span>

<button ht-button htType="primary">
  Inbox
  <span ht-badge htType="warning" htSize="xs">99+</span>
</button>'
          >
            <div class="space-y-2">
              <div>
                <span class="text-lg">Notifications </span>
                <span ht-badge htType="error" htSize="sm">5</span>
              </div>
              <div>
                <button ht-button htType="primary">
                  Inbox
                  <span ht-badge htType="warning" htSize="xs">99+</span>
                </button>
              </div>
            </div>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Alert Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Alerts</h2>

        <!-- Alert Types -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Alert Types</h3>
          <app-ui-demo-tabs
            htmlSource='<div ht-alert>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>Default alert with neutral styling</span>
</div>

<div ht-alert htType="info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>Info: This is an informational message</span>
</div>

<div ht-alert htType="success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Success: Your operation completed successfully!</span>
</div>

<div ht-alert htType="warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: Please review before proceeding</span>
</div>

<div ht-alert htType="error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error: Something went wrong!</span>
</div>'
          >
            <div class="space-y-4">
              <div ht-alert>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-6 w-6 shrink-0 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Default alert with neutral styling</span>
              </div>

              <div ht-alert htType="info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-6 w-6 shrink-0 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Info: This is an informational message</span>
              </div>

              <div ht-alert htType="success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Success: Your operation completed successfully!</span>
              </div>

              <div ht-alert htType="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Warning: Please review before proceeding</span>
              </div>

              <div ht-alert htType="error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error: Something went wrong!</span>
              </div>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Alert with Actions -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Alert with Actions</h3>
          <app-ui-demo-tabs
            htmlSource='<div ht-alert htType="warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <div>
    <h3 class="font-bold">Cookie Policy</h3>
    <div class="text-sm">We use cookies to improve your experience on our site.</div>
  </div>
  <div class="flex gap-2">
    <button ht-button htSize="sm">Deny</button>
    <button ht-button htSize="sm" htType="primary">Accept</button>
  </div>
</div>'
          >
            <div ht-alert htType="warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h3 class="font-bold">Cookie Policy</h3>
                <div class="text-sm">We use cookies to improve your experience on our site.</div>
              </div>
              <div class="flex gap-2">
                <button ht-button htSize="sm">Deny</button>
                <button ht-button htSize="sm" htType="primary">Accept</button>
              </div>
            </div>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Combined Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Combined Example</h2>
        <app-ui-demo-tabs
          htmlSource='<div ht-alert htType="info">
  <span>
    New features available!
    <span ht-badge htType="success" htSize="sm" class="ml-2">3 New</span>
  </span>
  <button ht-button htSize="sm" htType="primary">View Features</button>
</div>

<div class="card bg-base-200 p-4">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-xl font-bold">User Profile</h3>
      <div class="mt-2 flex gap-2">
        <span ht-badge htType="primary">Admin</span>
        <span ht-badge htType="accent" htOutline>Verified</span>
        <span ht-badge htType="ghost">Pro Member</span>
      </div>
    </div>
    <div class="flex gap-2">
      <button ht-button htType="secondary">Edit</button>
      <button ht-button htType="primary">Save</button>
    </div>
  </div>
</div>'
        >
          <div class="space-y-4">
            <div ht-alert htType="info">
              <span>
                New features available!
                <span ht-badge htType="success" htSize="sm" class="ml-2">3 New</span>
              </span>
              <button ht-button htSize="sm" htType="primary">View Features</button>
            </div>

            <div class="card bg-base-200 p-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold">User Profile</h3>
                  <div class="mt-2 flex gap-2">
                    <span ht-badge htType="primary">Admin</span>
                    <span ht-badge htType="accent" htOutline>Verified</span>
                    <span ht-badge htType="ghost">Pro Member</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button ht-button htType="secondary">Edit</button>
                  <button ht-button htType="primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </app-ui-demo-tabs>
      </section>

      <!-- Input Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Inputs</h2>

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
              <app-ui-form-input
                id="input-tel"
                label="Telephone"
                placeholder="555-1234"
                type="tel"
              />
              <app-ui-form-input
                id="input-url"
                label="URL"
                placeholder="https://example.com"
                type="url"
              />
            </div>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Checkbox Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Checkboxes</h2>

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
              <app-ui-form-checkbox
                id="check-xs"
                label="Extra Small"
                htSize="xs"
                htColor="primary"
              />
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
      </section>

      <!-- Skeleton Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Skeletons</h2>

        <!-- Skeleton Types -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Skeleton Types</h3>
          <app-ui-demo-tabs
            htmlSource='<div ht-skeleton htSize="lg" class="mb-4"></div>
<div ht-skeleton htType="circle" htSize="lg"></div>
<div ht-skeleton htType="rectangle" htSize="lg" htWidth="full"></div>'
          >
            <div class="space-y-4">
              <div ht-skeleton htSize="lg" class="mb-4"></div>
              <div ht-skeleton htType="circle" htSize="lg"></div>
              <div ht-skeleton htType="rectangle" htSize="lg" htWidth="full"></div>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Skeleton Sizes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Skeleton Sizes</h3>
          <app-ui-demo-tabs
            htmlSource='<div ht-skeleton htSize="xs"></div>
<div ht-skeleton htSize="sm"></div>
<div ht-skeleton htSize="md"></div>
<div ht-skeleton htSize="lg"></div>
<div ht-skeleton htSize="xl"></div>'
          >
            <div class="space-y-3">
              <div ht-skeleton htSize="xs"></div>
              <div ht-skeleton htSize="sm"></div>
              <div ht-skeleton htSize="md"></div>
              <div ht-skeleton htSize="lg"></div>
              <div ht-skeleton htSize="xl"></div>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Skeleton Widths -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Skeleton Widths</h3>
          <app-ui-demo-tabs
            htmlSource='<div ht-skeleton htWidth="full"></div>
<div ht-skeleton htWidth="3/4"></div>
<div ht-skeleton htWidth="1/2"></div>
<div ht-skeleton htWidth="1/3"></div>
<div ht-skeleton htWidth="1/4"></div>'
          >
            <div class="space-y-3">
              <div ht-skeleton htWidth="full"></div>
              <div ht-skeleton htWidth="3/4"></div>
              <div ht-skeleton htWidth="1/2"></div>
              <div ht-skeleton htWidth="1/3"></div>
              <div ht-skeleton htWidth="1/4"></div>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Skeleton Loading Card Example -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Loading Card Example</h3>
          <app-ui-demo-tabs
            htmlSource='<div class="card bg-base-200 p-4">
  <div class="flex items-center space-x-4">
    <div ht-skeleton htType="circle" htSize="lg"></div>
    <div class="flex-1 space-y-2">
      <div ht-skeleton htWidth="full"></div>
      <div ht-skeleton htWidth="3/4"></div>
    </div>
  </div>
</div>'
          >
            <div class="card bg-base-200 p-4">
              <div class="flex items-center space-x-4">
                <div ht-skeleton htType="circle" htSize="lg"></div>
                <div class="flex-1 space-y-2">
                  <div ht-skeleton htWidth="full"></div>
                  <div ht-skeleton htWidth="3/4"></div>
                </div>
              </div>
            </div>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Progress Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Progress</h2>

        <!-- Progress Colors -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Progress Colors</h3>
          <app-ui-demo-tabs
            htmlSource='<progress ht-progress [value]="70"></progress>
<progress ht-progress htColor="primary" [value]="70"></progress>
<progress ht-progress htColor="secondary" [value]="70"></progress>
<progress ht-progress htColor="accent" [value]="70"></progress>
<progress ht-progress htColor="info" [value]="70"></progress>
<progress ht-progress htColor="success" [value]="70"></progress>
<progress ht-progress htColor="warning" [value]="70"></progress>
<progress ht-progress htColor="error" [value]="70"></progress>'
          >
            <div class="space-y-3">
              <progress ht-progress [value]="70"></progress>
              <progress ht-progress htColor="primary" [value]="70"></progress>
              <progress ht-progress htColor="secondary" [value]="70"></progress>
              <progress ht-progress htColor="accent" [value]="70"></progress>
              <progress ht-progress htColor="info" [value]="70"></progress>
              <progress ht-progress htColor="success" [value]="70"></progress>
              <progress ht-progress htColor="warning" [value]="70"></progress>
              <progress ht-progress htColor="error" [value]="70"></progress>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Progress Sizes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Progress Sizes</h3>
          <app-ui-demo-tabs
            htmlSource='<progress ht-progress htSize="xs" htColor="primary" [value]="70"></progress>
<progress ht-progress htSize="sm" htColor="primary" [value]="70"></progress>
<progress ht-progress htSize="md" htColor="primary" [value]="70"></progress>
<progress ht-progress htSize="lg" htColor="primary" [value]="70"></progress>'
          >
            <div class="space-y-3">
              <progress ht-progress htSize="xs" htColor="primary" [value]="70"></progress>
              <progress ht-progress htSize="sm" htColor="primary" [value]="70"></progress>
              <progress ht-progress htSize="md" htColor="primary" [value]="70"></progress>
              <progress ht-progress htSize="lg" htColor="primary" [value]="70"></progress>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Progress Values -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Progress Values</h3>
          <app-ui-demo-tabs
            htmlSource='<progress ht-progress htColor="success" [value]="0">0%</progress>
<progress ht-progress htColor="primary" [value]="25">25%</progress>
<progress ht-progress htColor="info" [value]="50">50%</progress>
<progress ht-progress htColor="warning" [value]="75">75%</progress>
<progress ht-progress htColor="success" [value]="100">100%</progress>'
          >
            <div class="space-y-3">
              <progress ht-progress htColor="success" [value]="0">0%</progress>
              <progress ht-progress htColor="primary" [value]="25">25%</progress>
              <progress ht-progress htColor="info" [value]="50">50%</progress>
              <progress ht-progress htColor="warning" [value]="75">75%</progress>
              <progress ht-progress htColor="success" [value]="100">100%</progress>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Indeterminate Progress -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Indeterminate Progress</h3>
          <app-ui-demo-tabs htmlSource='<progress ht-progress htColor="primary"></progress>'>
            <progress ht-progress htColor="primary"></progress>
          </app-ui-demo-tabs>
        </div>
      </section>

      <!-- Tooltip Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Tooltips</h2>

        <!-- Tooltip Positions -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Tooltip Positions</h3>
          <app-ui-demo-tabs
            htmlSource='<ht-tooltip text="Tooltip on top" htPosition="top">
  <button ht-button>Top</button>
</ht-tooltip>

<ht-tooltip text="Tooltip on bottom" htPosition="bottom">
  <button ht-button>Bottom</button>
</ht-tooltip>

<ht-tooltip text="Tooltip on left" htPosition="left">
  <button ht-button>Left</button>
</ht-tooltip>

<ht-tooltip text="Tooltip on right" htPosition="right">
  <button ht-button>Right</button>
</ht-tooltip>'
          >
            <div class="flex flex-wrap justify-center gap-4">
              <ht-tooltip text="Tooltip on top" htPosition="top">
                <button ht-button>Top</button>
              </ht-tooltip>
              <ht-tooltip text="Tooltip on bottom" htPosition="bottom">
                <button ht-button>Bottom</button>
              </ht-tooltip>
              <ht-tooltip text="Tooltip on left" htPosition="left">
                <button ht-button>Left</button>
              </ht-tooltip>
              <ht-tooltip text="Tooltip on right" htPosition="right">
                <button ht-button>Right</button>
              </ht-tooltip>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Tooltip Colors -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Tooltip Colors</h3>
          <app-ui-demo-tabs
            htmlSource='<ht-tooltip text="Default tooltip">
  <button ht-button>Default</button>
</ht-tooltip>

<ht-tooltip text="Primary tooltip" htColor="primary">
  <button ht-button htType="primary">Primary</button>
</ht-tooltip>

<ht-tooltip text="Secondary tooltip" htColor="secondary">
  <button ht-button htType="secondary">Secondary</button>
</ht-tooltip>

<ht-tooltip text="Accent tooltip" htColor="accent">
  <button ht-button htType="accent">Accent</button>
</ht-tooltip>

<ht-tooltip text="Info tooltip" htColor="info">
  <button ht-button htType="info">Info</button>
</ht-tooltip>

<ht-tooltip text="Success tooltip" htColor="success">
  <button ht-button htType="success">Success</button>
</ht-tooltip>

<ht-tooltip text="Warning tooltip" htColor="warning">
  <button ht-button htType="warning">Warning</button>
</ht-tooltip>

<ht-tooltip text="Error tooltip" htColor="error">
  <button ht-button htType="error">Error</button>
</ht-tooltip>'
          >
            <div class="flex flex-wrap gap-2">
              <ht-tooltip text="Default tooltip">
                <button ht-button>Default</button>
              </ht-tooltip>
              <ht-tooltip text="Primary tooltip" htColor="primary">
                <button ht-button htType="primary">Primary</button>
              </ht-tooltip>
              <ht-tooltip text="Secondary tooltip" htColor="secondary">
                <button ht-button htType="secondary">Secondary</button>
              </ht-tooltip>
              <ht-tooltip text="Accent tooltip" htColor="accent">
                <button ht-button htType="accent">Accent</button>
              </ht-tooltip>
              <ht-tooltip text="Info tooltip" htColor="info">
                <button ht-button htType="info">Info</button>
              </ht-tooltip>
              <ht-tooltip text="Success tooltip" htColor="success">
                <button ht-button htType="success">Success</button>
              </ht-tooltip>
              <ht-tooltip text="Warning tooltip" htColor="warning">
                <button ht-button htType="warning">Warning</button>
              </ht-tooltip>
              <ht-tooltip text="Error tooltip" htColor="error">
                <button ht-button htType="error">Error</button>
              </ht-tooltip>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Always Open Tooltip -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Always Open Tooltip</h3>
          <app-ui-demo-tabs
            htmlSource='<ht-tooltip text="This tooltip is always visible" htColor="primary" htOpen>
  <button ht-button htType="primary">Always Open</button>
</ht-tooltip>'
          >
            <div class="flex justify-center">
              <ht-tooltip text="This tooltip is always visible" htColor="primary" htOpen>
                <button ht-button htType="primary">Always Open</button>
              </ht-tooltip>
            </div>
          </app-ui-demo-tabs>
        </div>

        <!-- Tooltips on Various Elements -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Tooltips on Various Elements</h3>
          <app-ui-demo-tabs
            htmlSource='<ht-tooltip text="Click to copy" htPosition="top">
  <span ht-badge htType="primary">Badge with tooltip</span>
</ht-tooltip>

<ht-tooltip text="More information available" htPosition="right">
  <span class="text-blue-500 cursor-help">Hover for details</span>
</ht-tooltip>

<ht-tooltip text="Important notification" htColor="error" htPosition="bottom">
  <span class="text-2xl cursor-pointer">⚠️</span>
</ht-tooltip>'
          >
            <div class="flex flex-wrap items-center gap-4">
              <ht-tooltip text="Click to copy" htPosition="top">
                <span ht-badge htType="primary">Badge with tooltip</span>
              </ht-tooltip>
              <ht-tooltip text="More information available" htPosition="right">
                <span class="text-blue-500 cursor-help">Hover for details</span>
              </ht-tooltip>
              <ht-tooltip text="Important notification" htColor="error" htPosition="bottom">
                <span class="text-2xl cursor-pointer">⚠️</span>
              </ht-tooltip>
            </div>
          </app-ui-demo-tabs>
        </div>
      </section>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ComponentsPage {}
