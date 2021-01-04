import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BuscaComponent } from "./busca.component";
import { BuscaPorNomeComponent } from "./buscar-por-nome/busca-por-nome.component";
import { PaginacaoComponent } from "./paginacao/paginacao.component";

@NgModule({
    declarations: 
    [
        BuscaComponent,
        BuscaPorNomeComponent,
        PaginacaoComponent
    ],
    exports: [BuscaComponent],
    imports:
    [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class BuscaModule{

}