import { afterEveryRender, afterNextRender, Component, effect, signal } from '@angular/core';
import { HlmBadge } from '@app/ui/badge';
import { HlmButton } from '@app/ui/button';

@Component({
  selector: 'app-index-page',
  imports: [HlmButton, HlmBadge],
  template: `
    <section class="container">
      <button hlmBtn (click)="counter.update((x) => x + 1)">Click me</button>
      <hlm-badge>{{ counter() }}</hlm-badge>
    </section>
  `,
})
export class MainIndexPage {
  readonly counter = signal(0);

  constructor() {
    afterEveryRender(() => {
      console.log('afterEveryRender rendered');
    });

    afterNextRender(() => {
      console.log('afterNextRender rendered for the first time', this.counter());
    });

    effect(() => {
      console.log('effect rendered');
    });
  }
}
