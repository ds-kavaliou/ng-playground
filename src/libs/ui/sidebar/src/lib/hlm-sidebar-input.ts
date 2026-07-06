import { Directive } from '@angular/core';
import { HlmInput } from '@app/ui/input';
import { classes } from '@app/ui/utils';

@Directive({
  selector: 'input[hlmSidebarInput]',
  hostDirectives: [HlmInput],
  host: {
    'data-slot': 'sidebar-input',
    'data-sidebar': 'input',
  },
})
export class HlmSidebarInput {
  constructor() {
    classes(() => 'bg-muted/20 dark:bg-muted/30 border-input h-8 w-full');
  }
}
