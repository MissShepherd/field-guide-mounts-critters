import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { HomePage } from './app/pages/home/home.page';

bootstrapApplication(HomePage, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
  ],
});
