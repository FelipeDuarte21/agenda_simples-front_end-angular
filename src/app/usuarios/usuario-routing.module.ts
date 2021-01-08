import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { UsuarioGuardService } from './usuario-guard.service';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
    {
        path: '', 
        component: UsuarioComponent,
        canActivate: [UsuarioGuardService],
        children: [
            {
                path: '',
                component: ListaComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRountingModule { }