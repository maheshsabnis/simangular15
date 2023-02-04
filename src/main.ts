import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// This will directly bootstrap the
// Standalone component
import {bootstrapApplication} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import {ContainerComponent} from './app/standalonecomponents/app.container.component';

// bootstrapApplication(ContainerComponent);

// platformBrowserDynamic: Manage the NG App Boostrapping in Broewser
// The Default Page it will look as 'index.html'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
