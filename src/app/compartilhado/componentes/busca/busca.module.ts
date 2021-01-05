import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BuscaComponent } from "./busca.component";
import { BuscaPorNomeComponent } from "./buscar-por-nome/busca-por-nome.component";
import { PaginacaoComponent } from "./paginacao/paginacao.component";

@NgModule({
    declarations: [
        BuscaComponent,
        BuscaPorNomeComponent,
        PaginacaoComponent
    ],
    exports: [
        BuscaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class BuscaModule{

}