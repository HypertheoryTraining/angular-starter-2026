import { Component } from '@angular/core';
import { HtBadgeComponent } from '@ht/shared/ui-common/badges/badge';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-badges-page',
  imports: [PageLayout, HtBadgeComponent, HtButtonComponent, DemoTabsComponent],
  template: `<app-ui-page title="Badges">
    <div class="space-y-8 p-4">
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
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class BadgesPage {}
