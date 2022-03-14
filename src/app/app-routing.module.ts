import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { LoginComponent } from './pages/login/login.component';
// import { ManutencaoComponent } from './pages/manutencao/manutencao.component';
// import { PlanosComponent } from './pages/planos/planos.component';
// import { SeguroComponent } from './pages/seguro/seguro.component';
// import { Seguro2Component } from './pages/seguro2/seguro2.component';
// import { Seguro3Component } from './pages/seguro3/seguro3.component';
import { StartComponent } from './pages/start/start.component';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent, },

  { path: 'start', component: StartComponent, },
  { path: 'document', component: DocumentComponent, },

  {
    path: 'user/:id',
    loadChildren: () => UserModule
  },
  {
    path: 'student/:id',
    loadChildren: () => StudentModule
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
