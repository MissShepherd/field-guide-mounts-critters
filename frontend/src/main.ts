import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { TabsPage } from './app/tabs/tabs.page';

bootstrapApplication(TabsPage, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes)
  ]
});
