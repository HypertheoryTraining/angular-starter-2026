import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `
    <app-ui-page title="Angular">
      <p>Welcome to the Angular Starter Project!</p>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {}
