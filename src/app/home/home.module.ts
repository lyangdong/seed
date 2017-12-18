import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HomeRouter } from './home.routes';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { UrisdictionComponent } from './urisdiction/urisdiction.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuAsideComponent,
    UrisdictionComponent,
  ],
  providers: []
})
export class HomeModule { }
