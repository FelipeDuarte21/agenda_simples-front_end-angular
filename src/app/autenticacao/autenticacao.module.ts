import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AutenticacaoRountingModule } from "./autenticacao-routing.module";
import { LoginComponent } from "./login/login.component";
import { LoginGuardService } from "./login/login-guard.service";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { UsuarioModule } from "../compartilhado/usuario/usuario.module";

@NgModule({
    declarations: [
        LoginComponent,
        CadastroComponent
    ],
    exports: [
        LoginComponent,
        CadastroComponent
    ],
    imports: [
        CommonModule,
        AutenticacaoRountingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        UsuarioModule
    ],
    providers: [
        LoginGuardService
    ]
})
export class  AutenticacaoModule{
    
}