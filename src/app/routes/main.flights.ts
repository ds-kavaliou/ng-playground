import { Component, effect, resource, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { HlmButtonImports } from '@app/ui/button';

import { HlmFieldImports } from '@app/ui/field';
import { HlmInput } from '@app/ui/input';

const API_URL = 'https://demo.angulararchitects.io/api/flight';

@Component({
  selector: 'app-flights-page',
  imports: [FormField, FormRoot, HlmFieldImports, HlmButtonImports, HlmInput],
  template: `
    <section class="container">
      <form [formRoot]="f" class="flex items-end gap-4">
        <div hlmField>
          <label hlmFieldLabel for="from">From</label>
          <input hlmInput id="from" [formField]="f.from" />
        </div>
        <div hlmField>
          <label hlmFieldLabel for="to">To</label>
          <input hlmInput id="to" [formField]="f.to" />
        </div>

        <div hlmField>
          <button hlmBtn type="submit" variant="outline">Search</button>
        </div>
      </form>
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
