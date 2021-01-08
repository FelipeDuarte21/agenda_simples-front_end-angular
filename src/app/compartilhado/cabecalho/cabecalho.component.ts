import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioToken } from "../usuario/usuario.model";
import { UsuarioService } from "../../autenticacao/usuario/usuario.service";

@Component({
    selector: 'cabecalho',
    templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent{

    usuario$: Observable<UsuarioToken>;

    constructor(
        private usuarioService: UsuarioService
    ){
        this.usuario$ = this.usuarioService.recuperarUsuario();
    }

    logout(){
        this.usuarioService.deslogarUsuario();
    }

}  