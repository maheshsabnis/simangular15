import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// This will directly bootstrap the
// Standalone component
import {bootstrapApplication} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import {ContainerComponent} from './app/standalonecomponents/app.container.component';

bootstrapApplication(ContainerComponent);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
