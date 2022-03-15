import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NotasComponent } from './notas/notas.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent, children: [
      { path: 'home', component: HomeComponent, },
      { path: 'map', component: MapComponent },
      { path: 'school', component: SchoolComponent, },

      { path: 'disciplinas', component: DisciplinasComponent, },
      { path: 'calendario', component: CalendarioComponent, },
      { path: 'biblioteca', component: BibliotecaComponent, },
      { path: 'notas', component: NotasComponent, },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

