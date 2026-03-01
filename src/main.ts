import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/frontend/pages/wrapper/app';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/frontend/app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // providePrimeNG({
    //   theme: {
    //     preset: Aura
    //   }
    // })
  ]
})
.catch((err) => console.error(err));
