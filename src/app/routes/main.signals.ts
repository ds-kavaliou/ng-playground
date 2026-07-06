import {
  afterEveryRender,
  afterNextRender,
  afterRenderEffect,
  Component,
  effect,
  signal,
} from '@angular/core';
import { HlmBadge } from '@app/ui/badge';
import { HlmButton } from '@app/ui/button';

@Component({
  selector: 'app-signals-page',
  imports: [HlmButton, HlmBadge],
  template: `
    <section class="container">
      <div class="flex items-center gap-2">
        <button hlmBtn (click)="submit()">submit</button>
        <hlm-badge>{{ counter() }}</hlm-badge>
      </div>
      <button hlmBtn variant="secondary" (click)="toggle.update((x) => !x)">toggle</button>
    </section>
  `,
})
export class MainSignalsPage {
  readonly counter = signal(0);
  readonly search = signal('hello');
  readonly toggle = signal(false);

  readonly submit = () => {
    /* glitch-free updates */
    this.search.update((x) => x + Math.random().toString(36).substring(2, 7));
    this.counter.update((x) => x + 1);
  };

  constructor() {
    effect(() => {
      /* glitch-free; triggers only once */
      console.log('glitchFreeEffect rendered', this.counter(), this.search());

      if (this.counter() > 5) {
        /* toggle() doesn't trigger effect here if counter() <= 5 */
        console.log(this.toggle());
      }
    });

    afterNextRender((...rest) => {
      console.log('afterNextRender rendered', rest);
    });

    afterEveryRender((...rest) => {
      console.log('afterEveryRender rendered', rest);
    });

    effect((...rest) => {
      console.log('effect rendered', rest);
    });

    afterRenderEffect((...rest) => {
      console.log('afterRenderEffect rendered', rest);
    });
  }
}
