import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent, children: [
      { path: 'home', component: HomeComponent, },
      { path: 'map', component: MapComponent },
      { path: 'school', component: SchoolComponent, },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

