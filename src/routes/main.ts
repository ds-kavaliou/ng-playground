import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="shadow">
      <div class="container h-20 flex items-center justify-between">
        <h1>playground</h1>
        <nav class="flex items-center gap-4">
          <a routerLink="/">home</a>
        </nav>
      </div>
    </header>

    <main class="grow py-4">
      <router-outlet />
    </main>

    <footer>footer</footer>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'min-h-screen flex flex-col',
  },
})
export class MainLayout {}
