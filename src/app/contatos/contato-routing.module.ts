import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoGuardService } from './contato-guard.service';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
    {
        path: '', 
        component: ContatoComponent,
        canActivate: [ContatoGuardService],
        children: [
            {
                path: '',
                component: ListaComponent
            },
            {
                path: 'cadastrar', 
                component: CadastroComponent,
            },
            {
                path: 'editar/:id', 
                component: EdicaoComponent
            },
        ]
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRountingModule { }