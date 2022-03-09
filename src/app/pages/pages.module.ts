import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    StartComponent,

    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
