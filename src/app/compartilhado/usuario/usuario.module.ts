import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UsuarioService } from "./usuario.service";

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        HttpClientModule
    ],
    providers: [
        UsuarioService
    ]
})
export class UsuarioModule{

}