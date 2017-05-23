import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeElementComponent }   from './home/home.component';
import { WinerySearchComponent }      from './winery-search/winery-search.component';
import { RegisterComponent }      from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeElementComponent },
  { path: 'search', component: WinerySearchComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
