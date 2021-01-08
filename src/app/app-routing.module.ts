import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
    },
    {
        path: 'contatos',
        loadChildren: () => import('./contatos/contato.module').then(m => m.ContatoModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuario.module').then(m => m.UsuarioModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
