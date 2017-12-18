import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';

import { AppRouter } from './app.routes';
import { HomeModule } from './home/home.module';
import { RequestService } from './services/request.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPwdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    AppRouter,
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
