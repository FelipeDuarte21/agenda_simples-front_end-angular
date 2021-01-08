import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BuscaModule } from "src/app/compartilhado/componentes/busca/busca.module";
import { ExibicaoModule } from "src/app/compartilhado/componentes/exibicao/exibicao.module";
import { ListaComponent } from "./lista.component";


@NgModule({
    declarations: [ListaComponent],
    exports: [ListaComponent],
    imports: [
        CommonModule,
        BuscaModule,
        ExibicaoModule
    ]
})
export class ListaModule{

}