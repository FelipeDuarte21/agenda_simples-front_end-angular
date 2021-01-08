import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login/login-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuardService]
    },
    {
        path: 'cadastrar',
        component: CadastroComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRountingModule { }
