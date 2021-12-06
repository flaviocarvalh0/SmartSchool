import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashBoard', pathMatch: 'full'},

  {path: 'dashBoard', component: DashboardComponent},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'perfil', component: PerfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
