import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

// ✅ Ionicons fix: import and register missing icons
import { addIcons } from 'ionicons';
import {
  funnelOutline,
  swapVerticalOutline,
  homeOutline,
  pawOutline,
  giftOutline,
  ellipseOutline
} from 'ionicons/icons';

addIcons({
  'funnel-outline': funnelOutline,
  'swap-vertical-outline': swapVerticalOutline,
  'home-outline': homeOutline,
  'paw-outline': pawOutline,
  'gift-outline': giftOutline,
  'ellipse-outline': ellipseOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient()
  ]
});
