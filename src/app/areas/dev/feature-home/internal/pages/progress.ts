import { Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { HtProgressComponent } from '@ht/shared/ui-common/progress/progress';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-progress-page',
  imports: [PageLayout, HtProgressComponent, DemoTabsComponent],
  template: `<app-ui-page title="Progress">
    <div class="space-y-8 p-4">
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
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ProgressPage {}
