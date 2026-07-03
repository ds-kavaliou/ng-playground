import { Directive } from '@angular/core';
import { classes } from '@app/ui/utils';

@Directive({
  selector: '[hlmCardTitle]',
  host: { 'data-slot': 'card-title' },
})
export class HlmCardTitle {
  constructor() {
    classes(() => 'text-sm font-medium');
  }
}
