import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-components-nav',
  imports: [PageLayout, RouterLink],
  template: `<app-ui-page title="Component Library">
    <div class="p-6">
      <p class="text-lg mb-8">
        Browse our DaisyUI-based Angular component library. Each component includes live examples,
        code snippets, and various configurations.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          routerLink="buttons"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Buttons</h2>
          <p class="text-base-content/70">
            Interactive buttons with various types, sizes, shapes, and states
          </p>
        </a>

        <a
          routerLink="badges"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Badges</h2>
          <p class="text-base-content/70">
            Small labels and tags for status indicators and counters
          </p>
        </a>

        <a
          routerLink="alerts"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Alerts</h2>
          <p class="text-base-content/70">
            Contextual feedback messages for success, error, warning, and info states
          </p>
        </a>

        <a
          routerLink="inputs"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Inputs</h2>
          <p class="text-base-content/70">
            Form input fields with validation, colors, sizes, and HTML5 types
          </p>
        </a>

        <a
          routerLink="checkboxes"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Checkboxes</h2>
          <p class="text-base-content/70">Checkbox inputs with labels, hints, colors, and sizes</p>
        </a>

        <a
          routerLink="skeletons"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Skeletons</h2>
          <p class="text-base-content/70">Loading placeholders with various shapes and sizes</p>
        </a>

        <a
          routerLink="progress"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Progress</h2>
          <p class="text-base-content/70">
            Visual progress indicators for loading and task completion
          </p>
        </a>

        <a
          routerLink="tooltips"
          class="card bg-base-200 hover:bg-base-300 transition-colors p-6 cursor-pointer"
        >
          <h2 class="text-2xl font-bold mb-2">Tooltips</h2>
          <p class="text-base-content/70">Hover tooltips with multiple positions and colors</p>
        </a>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ComponentsNavPage {}
