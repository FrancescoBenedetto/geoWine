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
import { WinerySearchComponent } from './winery-search/winery-search.component';

import { WinerySearchHeaderComponent } from './winery-search-header/winery-search-header.component';
import { WinerySearchBodyComponent } from './winery-search-body/winery-search-body.component';
import { HomeElementComponent } from './home/home.component';
import { HeaderElementComponent } from './header/header.component';

import { AppRoutingModule }     from './app-routing.module';






@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBhYrSrv8bUiBUMWDI4TlSTXmg51yYEU-I', libraries: ['places']})
    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    WineriesMapComponent,
    HomeElementComponent,
    HeaderElementComponent,
    WineryListComponent,
    WineryListElementComponent,
    WinerySearchHeaderComponent,
    WinerySearchBodyComponent,
    WinerySearchComponent
  ],
  providers: [ WineryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
