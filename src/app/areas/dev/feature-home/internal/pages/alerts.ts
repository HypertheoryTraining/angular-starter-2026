import { Component } from '@angular/core';
import { HtAlertComponent } from '@ht/shared/ui-common/alerts/alert';
import { HtBadgeComponent } from '@ht/shared/ui-common/badges/badge';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-alerts-page',
  imports: [PageLayout, HtAlertComponent, HtBadgeComponent, HtButtonComponent, DemoTabsComponent],
  template: `<app-ui-page title="Alerts">
    <div class="space-y-8 p-4">
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

      <!-- Combined Example -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Combined Example</h3>
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
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class AlertsPage {}
