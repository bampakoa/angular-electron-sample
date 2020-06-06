import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElectronService, NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PirateService } from './pirate.service';
import { PirateLocalService } from './pirate-local.service';

const pirateFactory = (http: HttpClient, electron: ElectronService) => {
  return !environment.desktop ? new PirateService(http) : new PirateLocalService(electron);
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [
    { provide: PirateService, useFactory: pirateFactory, deps: [HttpClient, ElectronService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
