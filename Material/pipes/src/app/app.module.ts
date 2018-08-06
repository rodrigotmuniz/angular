import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeFr from '@angular/common/locales/fr';
import locale from '@angular/common/locales/zh-Hant-HK';
import localeId from '@angular/common/locales/id';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { SettingsService } from './services/settings.service';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';
import { MenorImparPipe } from './pipes/menor-impar.pipe';

registerLocaleData(localePt);
registerLocaleData(localeFr);
registerLocaleData(locale);
registerLocaleData(localeId);

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    ExemplosPipeComponent,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    MenorImparPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
    // SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: settingsService => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
