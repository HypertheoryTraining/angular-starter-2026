import { Component, input } from '@angular/core';

let tabGroupCounter = 0;

@Component({
  selector: 'app-ui-demo-tabs',
  standalone: true,
  template: `
    <div class="tabs tabs-border">
      <input
        type="radio"
        [name]="tabGroupName"
        class="tab btn"
        aria-label="Preview"
        checked="checked"
      />
      <div class="tab-content border-base-300 bg-base-100 p-10">
        <ng-content />
      </div>

      <input type="radio" [name]="tabGroupName" class="tab btn" aria-label="Html" />
      <div class="tab-content border-base-300 bg-base-100 p-10">
        <pre>{{ htmlSource() }}</pre>
      </div>
    </div>
  `,
  styles: ``,
})
export class DemoTabsComponent {
  htmlSource = input.required<string>();
  tabGroupName = `demo_tabs_${++tabGroupCounter}`;
}
