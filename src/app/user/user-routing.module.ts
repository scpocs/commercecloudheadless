import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'home', component: HomeComponent, },
      { path: 'students', component: StudentsComponent, },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
