import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ExibicaoComponent } from "./exibicao.component";
import { MascaraNumeroPipe } from "./mascara-numero.pipe";
import { PrimeiraMaiusculaPipe } from "./primeira-maiuscula.pipe";
import { TabelaComponent } from "./tabela/tabela.component";

@NgModule({
    declarations: [
        ExibicaoComponent,
        CardComponent,
        TabelaComponent,
        PrimeiraMaiusculaPipe,
        MascaraNumeroPipe
    ],
    exports: [ExibicaoComponent],
    imports: [
        CommonModule
    ],
    providers: [
        PrimeiraMaiusculaPipe
    ]
})
export class ExibicaoModule{

}