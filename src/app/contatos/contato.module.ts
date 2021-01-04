import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from 'angular2-text-mask';


import { CadastroComponent } from "./cadastro/cadastro.component";
import { EdicaoComponent } from "./edicao/edicao.component";
import { ContatoRountingModule } from "./contato-routing.module";
import { ContatoService } from "./contato.service";
import { ListaModule } from "./lista/lista.module";
import { InterceptadorService } from "../autenticacao/interceptador/interceptador.service";
import { ContatoGuardService } from "./contato-guard.service";
import { UsuarioService } from "../autenticacao/usuario/usuario.service";
import { ContatoComponent } from "./contato.component";
import { CabecalhoModule } from "../cabecalho/cabecalho.module";


@NgModule({
    declarations: [
        ContatoComponent,
        CadastroComponent,
        EdicaoComponent
    ],
    exports: [
        ContatoComponent,
        CadastroComponent,
        EdicaoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        TextMaskModule,
        ListaModule,
        ContatoRountingModule,
        CabecalhoModule
    ],
    providers: [
        ContatoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass:  InterceptadorService,
            multi: true
        },
        ContatoGuardService,
        UsuarioService
    ]
})
export class ContatoModule{

}