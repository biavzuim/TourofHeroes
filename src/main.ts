import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//*Esse arquivo inicia o aplicativo Angular, pede para começar com o componente principal - AppComponent
/*se der erro ele vai mostrar no console do navegador*/
