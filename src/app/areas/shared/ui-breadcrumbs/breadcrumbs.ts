import { Component, computed, signal } from '@angular/core';
import { NavigationEnd, RouterLink } from '@angular/router';
import { injectNavigationEnd } from 'ngxtension/navigation-end';

interface BreadcrumbSegment {
  label: string;
  path: string;
  isLast: boolean;
}

@Component({
  selector: 'app-ui-breadcrumbs',
  imports: [RouterLink],
  template: `
    <div class="breadcrumbs text-xs font-light">
      <ul>
        @for (segment of breadcrumbs(); track segment.path) {
          <li>
            @if (segment.isLast) {
              <span>{{ segment.label }}</span>
            } @else {
              <a [routerLink]="segment.path">{{ segment.label }}</a>
            }
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class Breadcrumbs {
  private source$ = injectNavigationEnd();
  private currentUrl = signal<string>('');

  breadcrumbs = computed(() => {
    const url = this.currentUrl();
    if (!url || url === '/') {
      return [{ label: 'Home', path: '/', isLast: true }];
    }

    const segments = url.split('/').filter((segment) => segment);
    const breadcrumbs: BreadcrumbSegment[] = [{ label: 'Home', path: '/', isLast: false }];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = this.formatSegmentLabel(segment);
      const isLast = index === segments.length - 1;
      breadcrumbs.push({ label, path: currentPath, isLast });
    });

    return breadcrumbs;
  });

  constructor() {
    this.source$.subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects || event.url);
    });
  }

  private formatSegmentLabel(segment: string): string {
    // Convert kebab-case or URL segment to Title Case
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
