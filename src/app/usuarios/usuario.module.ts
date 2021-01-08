import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InterceptadorService } from "../autenticacao/interceptador/interceptador.service";
import { CabecalhoModule } from "../compartilhado/cabecalho/cabecalho.module";
import { UsuarioModule as UM } from '../compartilhado/usuario/usuario.module';
import { ListaModule } from "./lista/lista.module";
import { UsuarioGuardService } from "./usuario-guard.service";
import { UsuarioRountingModule } from "./usuario-routing.module";
import { UsuarioComponent } from "./usuario.component";

@NgModule({
    declarations:[UsuarioComponent],
    exports: [UsuarioComponent],
    imports: [
        CommonModule,
        UsuarioRountingModule,
        RouterModule,
        UM,
        CabecalhoModule,
        ListaModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass:  InterceptadorService,
            multi: true
        },
        UsuarioGuardService
    ]
})
export class UsuarioModule{

}