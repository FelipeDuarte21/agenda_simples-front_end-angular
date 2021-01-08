import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsuarioService } from "src/app/autenticacao/usuario/usuario.service";
import { CabecalhoComponent } from "./cabecalho.component";

@NgModule({
    declarations: [CabecalhoComponent],
    exports: [CabecalhoComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        UsuarioService
    ]
})
export class CabecalhoModule{

}