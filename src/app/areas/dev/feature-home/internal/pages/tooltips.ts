import { Component } from '@angular/core';
import { HtBadgeComponent } from '@ht/shared/ui-common/badges/badge';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';
import { HtTooltipComponent } from '@ht/shared/ui-common/tooltip/tooltip';

@Component({
  selector: 'app-tooltips-page',
  imports: [PageLayout, HtTooltipComponent, HtButtonComponent, HtBadgeComponent, DemoTabsComponent],
  template: `<app-ui-page title="Tooltips">
    <div class="space-y-8 p-4">
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
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class TooltipsPage {}
