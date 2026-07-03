import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="shadow">
      <div class="container h-16 flex items-center justify-between">
        <h1 class="font-medium tracking-wide uppercase">
          <a routerLink="/">playground.</a>
        </h1>
        <nav class="flex items-center gap-4">
          <a routerLink="/">home</a>
        </nav>
      </div>
    </header>

    <main class="grow py-2">
      <router-outlet />
    </main>

    <footer class="border-t py-4">
      <div class="container">
        <p class="text-sm text-center">
          &copy; <span class="font-semibold uppercase tracking-wide">playground.</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  `,
  host: {
    class: 'min-h-screen flex flex-col',
  },
})
export class MainLayout {}
