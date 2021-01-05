import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExibicaoModule } from "src/app/compartilhado/componentes/exibicao/exibicao.module";
import { BuscaModule } from "./busca/busca.module";
import { ListaComponent } from "./lista.component";

@NgModule({
    declarations: [
        ListaComponent
    ],
    exports: [ListaComponent],
    imports: [
        CommonModule,
        BuscaModule,
        ExibicaoModule,
        RouterModule
    ]
})
export class ListaModule{

}