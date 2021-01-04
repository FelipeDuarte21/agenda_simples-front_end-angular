import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BuscaModule } from "./busca/busca.module";
import { ExibicaoModule } from "./exibicao/exibicacao.module";
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