import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { WineriesMapComponent }  from './wineries-map/map.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhYrSrv8bUiBUMWDI4TlSTXmg51yYEU-I'
    })
  ],
  declarations: [
    AppComponent,
    WineriesMapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
