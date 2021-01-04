import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../usuario/usuario.model";

import { API_ROUTER } from '../../app-api-routing';

@Injectable()
export class CadastroUsuarioService{
    
    constructor(
        private http: HttpClient
    ){}

    cadastrar(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${API_ROUTER}/usuario`,usuario);
    }

}