import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student.component';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MenuModule,
    MenubarModule,
    TabMenuModule
    
  ]
})
export class StudentModule { }
