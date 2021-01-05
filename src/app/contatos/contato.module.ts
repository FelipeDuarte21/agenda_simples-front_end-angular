import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ContatoRountingModule } from "./contato-routing.module";
import { CabecalhoModule } from "../cabecalho/cabecalho.module";
import { CadastroModule } from "./cadastro/cadastro.module";
import { EdicaoModule } from "./edicao/edicao.module";
import { ListaModule } from "./lista/lista.module";

import { ContatoService } from "./contato.service";
import { InterceptadorService } from "../autenticacao/interceptador/interceptador.service";
import { ContatoGuardService } from "./contato-guard.service";
import { UsuarioService } from "../autenticacao/usuario/usuario.service";

import { ContatoComponent } from "./contato.component";
import { DesmascaraNumeroPipe } from "./desmascara-numero.pipe";


@NgModule({
    declarations: [ContatoComponent],
    exports: [ContatoComponent],
    imports: [
        CommonModule,
        ContatoRountingModule,
        HttpClientModule,
        CabecalhoModule,
        CadastroModule,
        EdicaoModule,
        ListaModule
    ],
    providers: [
        ContatoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass:  InterceptadorService,
            multi: true
        },
        ContatoGuardService,
        UsuarioService,
        DesmascaraNumeroPipe
    ]
})
export class ContatoModule{

}