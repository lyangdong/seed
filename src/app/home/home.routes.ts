import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home.component';
import { UrisdictionComponent } from './urisdiction/urisdiction.component';

const HomeRoutes: Routes = <Routes> [
  {
    path : 'home',
    component : HomeComponent,
    children : [
      {
        path : '',
        component : UrisdictionComponent
      },
      {
        path : 'urisdiction',
        component : UrisdictionComponent
      }
      ]
  }
];

@NgModule({
  imports : [RouterModule.forChild(HomeRoutes)],
  exports: [ RouterModule ]
})

export class HomeRouter { }
