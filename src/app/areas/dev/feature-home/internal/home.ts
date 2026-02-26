import { Component, signal } from '@angular/core';
import { SectionLayout, SectionLink } from '@ht/shared/ui-common/layouts/section';

@Component({
  selector: 'app-home-home',
  imports: [SectionLayout],
  template: `
    <app-ui-section-layout title="Angular Development" [links]="links()"> </app-ui-section-layout>
  `,
  styles: ``,
})
export class Home {
  links = signal<SectionLink[]>([
    {
      title: 'Tools',
      path: 'tools',
    },
    {
      title: 'Components',
      path: 'components',
    },
  ]);
}
