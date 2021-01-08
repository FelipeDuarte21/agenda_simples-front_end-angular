import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginaUsuario, Usuario } from "./usuario.model";

import { API_ROUTER } from '../../app-api-routing';

@Injectable()
export class UsuarioService{

    private API:string = `${API_ROUTER}/usuario`;

    constructor(
        private http: HttpClient
    ){}

    cadastrar(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(this.API,usuario);
    }

    buscarPorNome(nome:string,pagina:number,qtdPorPagina:number):Observable<PaginaUsuario>{
        return this.http.get<PaginaUsuario>(`${this.API}/search?nome=${nome}&pagina=${pagina}&qtdPorPagina=${qtdPorPagina}`);
    }

    buscarTodos(pagina:number,qtdPorPagina:number):Observable<PaginaUsuario>{
        return this.http.get<PaginaUsuario>(`${this.API}?pagina=${pagina}&qtdPorPagina=${qtdPorPagina}`);
    }

}