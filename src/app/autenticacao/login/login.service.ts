import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { tap } from 'rxjs/operators';

import { API_ROUTER } from '../../app-api-routing';
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class LoginService{

    constructor(
        private http: HttpClient,
        private usuarioService: UsuarioService
    ){}

    logar(email:string, senha:string){

        return this.http.post(
            `${API_ROUTER}/login`,{email,senha},{observe:'response'}
        ).pipe(tap(res  => {
            let token = res.headers.get('Authorization');
            this.usuarioService.logarUsuario(token);
        }));
    }

}