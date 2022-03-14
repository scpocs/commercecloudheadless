import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student.component';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { SchoolComponent } from './school/school.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    SchoolComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MenuModule,
    MenubarModule,
    TabMenuModule,
    LeafletModule,
    GalleriaModule,
    
  ]
})
export class StudentModule { }
