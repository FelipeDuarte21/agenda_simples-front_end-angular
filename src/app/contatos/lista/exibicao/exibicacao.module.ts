import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { ExibicaoComponent } from "./exibicao.component";
import { RemocaoComponent } from "../remocao/remocao.component";
import { TabelaComponent } from "./tabela/tabela.component";

@NgModule({
    declarations: 
    [
        ExibicaoComponent,
        CardComponent,
        TabelaComponent,
        RemocaoComponent
    ],
    exports: [ExibicaoComponent],
    imports: 
    [
        CommonModule,
        RouterModule
    ]
})
export class ExibicaoModule{

}