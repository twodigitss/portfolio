import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/pages/wrapper/app';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation())
  ]
})
.catch((err) => console.error(err));
