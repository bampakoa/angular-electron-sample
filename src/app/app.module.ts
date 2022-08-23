import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElectronService } from 'ngx-electronyzer';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PirateLocalService } from './pirate-local.service';
import { PirateService } from './pirate.service';

const pirateFactory = (http: HttpClient, electron: ElectronService) => {
  return !environment.desktop ? new PirateService(http) : new PirateLocalService(electron);
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: PirateService, useFactory: pirateFactory, deps: [HttpClient, ElectronService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
