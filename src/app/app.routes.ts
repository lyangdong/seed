import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = <Routes> [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes , {useHash: true})
  ],
  exports: [ RouterModule ]
})

export class AppRouter {}
