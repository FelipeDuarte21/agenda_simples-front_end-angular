import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EdicaoComponent } from './edicao/edicao.component';


const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'novo', component: CadastroComponent},
  {path: 'detalhe/:id', component: DetalheComponent},
  {path: 'editar/:id', component: EdicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
