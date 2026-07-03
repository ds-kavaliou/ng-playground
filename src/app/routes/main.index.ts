import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HlmButton } from '@app/ui/button';

@Component({
  selector: 'app-index-page',
  imports: [HlmButton],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div>
      <button hlmBtn>Click me</button>
    </div>
  `,
})
export class MainIndexPage {}
