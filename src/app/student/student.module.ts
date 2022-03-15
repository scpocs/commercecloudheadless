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

import { CalendarModule } from 'primeng/calendar';

import { GalleriaModule } from 'primeng/galleria';

import { FormsModule } from '@angular/forms';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { NotasComponent } from './notas/notas.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    SchoolComponent,
    MapComponent,
    DisciplinasComponent,
    CalendarioComponent,
    BibliotecaComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MenuModule,
    MenubarModule,
    TabMenuModule,
    LeafletModule,
    CalendarModule,
    GalleriaModule,
    FormsModule,
    ComponentsModule,
    
  ]
})
export class StudentModule { }
