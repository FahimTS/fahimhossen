import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as AOS from 'aos';
import 'aos/dist/aos.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => AOS.init())
  .catch(err => console.error(err));