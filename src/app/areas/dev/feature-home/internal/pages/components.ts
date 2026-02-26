import { Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { HtButtonComponent } from '@ht/shared/ui-common/buttons/button';

@Component({
  selector: 'app-home-pages-components',
  imports: [PageLayout, HtButtonComponent],
  template: `<app-ui-page title="components">
    <ht-button htType="accent">Click Me</ht-button>
    <ht-button>Click Me</ht-button>
    <ht-button htType="secondary" htSize="xl" htShape="wide">Click Me</ht-button>
    <button ht-button htType="primary" htSize="lg">Click Me</button>
    <button ht-button>Click Me</button>
  </app-ui-page>`,
  styles: ``,
})
export class ComponentsPage {}
