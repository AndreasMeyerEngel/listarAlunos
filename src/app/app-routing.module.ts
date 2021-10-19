import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaralunosComponent } from './components/alunos/listaralunos/listaralunos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alunos', component: ListaralunosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
