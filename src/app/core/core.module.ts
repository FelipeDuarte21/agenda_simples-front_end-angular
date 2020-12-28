import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from 'angular2-text-mask';

import { ListaModule } from "./lista/lista.module";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { EdicaoComponent } from "./edicao/edicao.component";
import { CoreRountingModule } from "./core-routing.module";
import { ContatoService } from "./contato.service";


@NgModule({
    declarations: [
        CadastroComponent,
        EdicaoComponent
    ],
    exports: [
        CadastroComponent,
        EdicaoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        TextMaskModule,
        ListaModule,
        CoreRountingModule
    ],
    providers: [ContatoService]
})
export class CoreModule{

}