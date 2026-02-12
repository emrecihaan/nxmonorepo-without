import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {
  provideSharedTranslation,
  provideDevExtreme,
} from '@my-micro-frontend/shared-core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideSharedTranslation(),
    provideDevExtreme(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
};
