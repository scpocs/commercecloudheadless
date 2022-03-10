import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student.component';

import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MenuModule
    
  ]
})
export class StudentModule { }
