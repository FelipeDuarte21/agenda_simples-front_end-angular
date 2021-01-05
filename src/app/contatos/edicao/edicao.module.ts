import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from "angular2-text-mask";
import { EdicaoComponent } from "./edicao.component";

@NgModule({
    declarations: [EdicaoComponent],
    exports: [EdicaoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TextMaskModule
    ]
})
export class EdicaoModule{

}