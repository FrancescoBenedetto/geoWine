import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';

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
import { WinerySearchHomeComponent } from './winery-search-header/winery-search-home.component';

import { WinerySearchBodyComponent } from './winery-search-body/winery-search-body.component';
import { HomeElementComponent } from './home/home.component';
import { HeaderElementComponent } from './header/header.component';
import { AlertComponent } from './directives/alert.component'
import { AuthGuard } from './guards/auth.guard';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';





@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
    WinerySearchComponent,
    WinerySearchHomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    WineryService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
