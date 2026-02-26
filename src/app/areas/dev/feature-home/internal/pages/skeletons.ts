import { Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { HtSkeletonComponent } from '@ht/shared/ui-common/skeleton/skeleton';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-skeletons-page',
  imports: [PageLayout, HtSkeletonComponent, DemoTabsComponent],
  template: `<app-ui-page title="Skeletons">
    <div class="space-y-8 p-4">
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
          htmlSource='<div ht-skeleton htSize="md" htWidth="full"></div>
<div ht-skeleton htSize="md" htWidth="3/4"></div>
<div ht-skeleton htSize="md" htWidth="1/2"></div>
<div ht-skeleton htSize="md" htWidth="1/3"></div>
<div ht-skeleton htSize="md" htWidth="1/4"></div>'
        >
          <div class="space-y-3">
            <div ht-skeleton htSize="md" htWidth="full"></div>
            <div ht-skeleton htSize="md" htWidth="3/4"></div>
            <div ht-skeleton htSize="md" htWidth="1/2"></div>
            <div ht-skeleton htSize="md" htWidth="1/3"></div>
            <div ht-skeleton htSize="md" htWidth="1/4"></div>
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
      <div ht-skeleton htSize="md" htWidth="full"></div>
      <div ht-skeleton htSize="md" htWidth="3/4"></div>
    </div>
  </div>
</div>'
        >
          <div class="card bg-base-200 p-4">
            <div class="flex items-center space-x-4">
              <div ht-skeleton htType="circle" htSize="lg"></div>
              <div class="flex-1 space-y-2">
                <div ht-skeleton htSize="md" htWidth="full"></div>
                <div ht-skeleton htSize="md" htWidth="3/4"></div>
              </div>
            </div>
          </div>
        </app-ui-demo-tabs>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class SkeletonsPage {}
