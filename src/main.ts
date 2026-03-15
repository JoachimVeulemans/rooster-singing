import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';
import 'src/app/data/extension/custom_type_methods';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
