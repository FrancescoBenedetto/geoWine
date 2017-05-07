import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { WineryService } from './services/winery-service'

import { AppComponent } from './app.component';
import { WineriesMapComponent }  from './winery-map/map.component';
import { WineryListComponent }  from './winery-list/winery-list.component';
import { WineryListElementComponent }  from './winery-list/winery-list-element.component';
import { WinerySearchComponent } from './winery-search/search.component'



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBhYrSrv8bUiBUMWDI4TlSTXmg51yYEU-I', libraries: ['places']})
    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    WineriesMapComponent,
    WineryListComponent,
    WineryListElementComponent,
    WinerySearchComponent
  ],
  providers: [ WineryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
