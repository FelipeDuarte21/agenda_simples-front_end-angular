import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'novo', component: CadastroComponent},
  {path: 'editar/:id', component: EdicaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRountingModule { }