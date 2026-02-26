import { Component } from '@angular/core';
import { HtAlertComponent } from '@ht/shared/ui-common/alerts/alert';
import { HtBadgeComponent } from '@ht/shared/ui-common/badges/badge';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { FormInputComponent } from '@ht/shared/ui-common/forms/inputs/form-input';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-home-pages-components',
  imports: [
    PageLayout,
    HtButtonComponent,
    HtBadgeComponent,
    HtAlertComponent,
    FormInputComponent,
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
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_12"
              class="tab btn"
              aria-label="Alerts"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_12" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;div ht-alert&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"&gt;&lt;/path&gt;
  &lt;/svg&gt;
  &lt;span&gt;Default alert with neutral styling&lt;/span&gt;
&lt;/div&gt;

&lt;div ht-alert htType="info"&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"&gt;&lt;/path&gt;
  &lt;/svg&gt;
  &lt;span&gt;Info: This is an informational message&lt;/span&gt;
&lt;/div&gt;

&lt;div ht-alert htType="success"&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
  &lt;/svg&gt;
  &lt;span&gt;Success: Your operation completed successfully!&lt;/span&gt;
&lt;/div&gt;

&lt;div ht-alert htType="warning"&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /&gt;
  &lt;/svg&gt;
  &lt;span&gt;Warning: Please review before proceeding&lt;/span&gt;
&lt;/div&gt;

&lt;div ht-alert htType="error"&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
  &lt;/svg&gt;
  &lt;span&gt;Error: Something went wrong!&lt;/span&gt;
&lt;/div&gt;</pre
              >
            </div>
          </div>
        </div>

        <!-- Alert with Actions -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Alert with Actions</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_13"
              class="tab btn"
              aria-label="Alerts"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_13" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;div ht-alert htType="warning"&gt;
  &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"&gt;
    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /&gt;
  &lt;/svg&gt;
  &lt;div&gt;
    &lt;h3 class="font-bold"&gt;Cookie Policy&lt;/h3&gt;
    &lt;div class="text-sm"&gt;We use cookies to improve your experience on our site.&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="flex gap-2"&gt;
    &lt;button ht-button htSize="sm"&gt;Deny&lt;/button&gt;
    &lt;button ht-button htSize="sm" htType="primary"&gt;Accept&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Combined Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Combined Example</h2>
        <div class="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_14"
            class="tab btn"
            aria-label="Examples"
            checked="checked"
          />
          <div class="tab-content border-base-300 bg-base-100 p-10">
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
          </div>
          <input type="radio" name="my_tabs_14" class="tab btn" aria-label="Html" />
          <div class="tab-content border-base-300 bg-base-100 p-10">
            <pre>
&lt;div ht-alert htType="info"&gt;
  &lt;span&gt;
    New features available!
    &lt;span ht-badge htType="success" htSize="sm" class="ml-2"&gt;3 New&lt;/span&gt;
  &lt;/span&gt;
  &lt;button ht-button htSize="sm" htType="primary"&gt;View Features&lt;/button&gt;
&lt;/div&gt;

&lt;div class="card bg-base-200 p-4"&gt;
  &lt;div class="flex items-center justify-between"&gt;
    &lt;div&gt;
      &lt;h3 class="text-xl font-bold"&gt;User Profile&lt;/h3&gt;
      &lt;div class="mt-2 flex gap-2"&gt;
        &lt;span ht-badge htType="primary"&gt;Admin&lt;/span&gt;
        &lt;span ht-badge htType="accent" htOutline&gt;Verified&lt;/span&gt;
        &lt;span ht-badge htType="ghost"&gt;Pro Member&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="flex gap-2"&gt;
      &lt;button ht-button htType="secondary"&gt;Edit&lt;/button&gt;
      &lt;button ht-button htType="primary"&gt;Save&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre
            >
          </div>
        </div>
      </section>

      <!-- Input Component Demos -->
      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Inputs</h2>

        <!-- Input Types -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Input Types</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_15"
              class="tab btn"
              aria-label="Inputs"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_15" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;app-ui-form-input
  id="input-bordered"
  label="Bordered Input"
  placeholder="Type here"
  htType="bordered"
/&gt;

&lt;app-ui-form-input
  id="input-ghost"
  label="Ghost Input"
  placeholder="Type here"
  htType="ghost"
/&gt;</pre
              >
            </div>
          </div>
        </div>

        <!-- Input Colors -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Input Colors</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_16"
              class="tab btn"
              aria-label="Inputs"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_16" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;app-ui-form-input id="input-primary" label="Primary" placeholder="Type here" htColor="primary" /&gt;
&lt;app-ui-form-input id="input-secondary" label="Secondary" placeholder="Type here" htColor="secondary" /&gt;
&lt;app-ui-form-input id="input-accent" label="Accent" placeholder="Type here" htColor="accent" /&gt;
&lt;app-ui-form-input id="input-info" label="Info" placeholder="Type here" htColor="info" /&gt;
&lt;app-ui-form-input id="input-success" label="Success" placeholder="Type here" htColor="success" /&gt;
&lt;app-ui-form-input id="input-warning" label="Warning" placeholder="Type here" htColor="warning" /&gt;
&lt;app-ui-form-input id="input-error" label="Error" placeholder="Type here" htColor="error" /&gt;</pre
              >
            </div>
          </div>
        </div>

        <!-- Input Sizes -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Input Sizes</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_17"
              class="tab btn"
              aria-label="Inputs"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_17" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;app-ui-form-input id="input-xs" label="Extra Small" placeholder="XS" htSize="xs" /&gt;
&lt;app-ui-form-input id="input-sm" label="Small" placeholder="SM" htSize="sm" /&gt;
&lt;app-ui-form-input id="input-md" label="Medium (Default)" placeholder="MD" htSize="md" /&gt;
&lt;app-ui-form-input id="input-lg" label="Large" placeholder="LG" htSize="lg" /&gt;
&lt;app-ui-form-input id="input-xl" label="Extra Large" placeholder="XL" htSize="xl" /&gt;</pre
              >
            </div>
          </div>
        </div>

        <!-- Input States and Validation -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Input States and Validation</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_18"
              class="tab btn"
              aria-label="Inputs"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
            </div>
            <input type="radio" name="my_tabs_18" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;app-ui-form-input id="input-normal" label="Normal" placeholder="Regular input" /&gt;

&lt;app-ui-form-input id="input-disabled" label="Disabled" placeholder="Cannot type here" disabled /&gt;

&lt;app-ui-form-input id="input-readonly" label="Read-only" placeholder="Read-only value" readonly /&gt;

&lt;app-ui-form-input
  id="input-with-hint"
  label="With Hint"
  placeholder="Type something"
  hint="This is a helpful hint text"
/&gt;

&lt;app-ui-form-input
  id="input-error-msg"
  label="With Error Message"
  placeholder="Type something"
  htColor="error"
  errorMessage="This field is required"
/&gt;</pre
              >
            </div>
          </div>
        </div>

        <!-- Input Types (HTML5) -->
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">HTML5 Input Types</h3>
          <div class="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_19"
              class="tab btn"
              aria-label="Inputs"
              checked="checked"
            />
            <div class="tab-content border-base-300 bg-base-100 p-10">
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
                <app-ui-form-input
                  id="input-number"
                  label="Number"
                  placeholder="123"
                  type="number"
                />
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
            </div>
            <input type="radio" name="my_tabs_19" class="tab btn" aria-label="Html" />
            <div class="tab-content border-base-300 bg-base-100 p-10">
              <pre>
&lt;app-ui-form-input id="input-email" label="Email" placeholder="you@example.com" type="email" /&gt;
&lt;app-ui-form-input id="input-password" label="Password" placeholder="••••••••" type="password" /&gt;
&lt;app-ui-form-input id="input-number" label="Number" placeholder="123" type="number" /&gt;
&lt;app-ui-form-input id="input-tel" label="Telephone" placeholder="555-1234" type="tel" /&gt;
&lt;app-ui-form-input id="input-url" label="URL" placeholder="https://example.com" type="url" /&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ComponentsPage {}
