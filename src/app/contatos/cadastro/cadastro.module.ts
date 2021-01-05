import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from "angular2-text-mask";
import { CadastroComponent } from "./cadastro.component";

@NgModule({
    declarations: [CadastroComponent],
    exports: [CadastroComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TextMaskModule
    ]
})
export class CadastroModule{

}