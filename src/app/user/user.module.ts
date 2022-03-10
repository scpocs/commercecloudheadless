import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { MenuModule } from 'primeng/menu';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MenuModule
  ]
})
export class UserModule { }
