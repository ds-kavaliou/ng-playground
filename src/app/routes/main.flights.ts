import { Component, effect, resource, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

import { HlmBadge } from '@app/ui/badge';
import { HlmButton } from '@app/ui/button';

const API_URL = 'https://demo.angulararchitects.io/api/flight';

@Component({
  selector: 'app-flights-page',
  imports: [FormField, HlmButton, HlmBadge],
  template: `
    <section class="container">
      <form>1</form>
    </section>
  `,
})
export class MainFlightsPage {
  readonly filters = signal({
    from: '',
    to: '',
  });

  readonly f = form(this.filters);

  readonly entities = resource({
    params: this.filters,
    loader: async () => {
      const response = await fetch(`${API_URL}`);
      return response.json();
    },
  });

  constructor() {
    effect(() => {
      console.log(this.entities.value());
    });
  }
}
