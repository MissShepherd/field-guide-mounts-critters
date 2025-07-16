import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

// ⬇️ Add these to fix icon loading warnings
import { addIcons } from 'ionicons';
import { funnelOutline, swapVerticalOutline, searchOutline } from 'ionicons/icons';

// ⬇️ Register the icons
addIcons({
  'funnel-outline': funnelOutline,
  'swap-vertical-outline': swapVerticalOutline,
  'search-outline': searchOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient()
  ]
});
