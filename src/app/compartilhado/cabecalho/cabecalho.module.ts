import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CabecalhoComponent } from "./cabecalho.component";

@NgModule({
    declarations: [CabecalhoComponent],
    exports: [CabecalhoComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CabecalhoModule{

}