import { Component } from '@angular/core';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { DemoTabsComponent } from '@ht/shared/ui-common/tabs/tabs';

@Component({
  selector: 'app-buttons-page',
  imports: [PageLayout, HtButtonComponent, DemoTabsComponent],
  template: `<app-ui-page title="Buttons">
    <div class="space-y-8 p-4">
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
<button ht-button htAriaDisabled>Aria Disabled (Still Interactive)</button>
<button ht-button htType="primary" htLoading>Primary Loading</button>'
        >
          <div class="flex flex-wrap items-center gap-2">
            <button ht-button>Normal</button>
            <button ht-button htLoading>Loading</button>
            <button ht-button htDisabled>Disabled</button>
            <button ht-button htAriaDisabled>Aria Disabled (Still Interactive)</button>
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
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ButtonsPage {}
