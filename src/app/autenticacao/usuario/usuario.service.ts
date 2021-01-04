import { Injectable } from "@angular/core";

import { TokenService } from "../token/token.service";
import { Usuario } from "./usuario.model";

import jwt_decode from 'jwt-decode';

import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({providedIn: "root"})
export class UsuarioService{

    private usuarioSubject = new BehaviorSubject<Usuario>(null);

    constructor(
        private tokenService: TokenService,
        private router: Router
    ){}

    logarUsuario(token: string){
        this.tokenService.setToken(token);
        
        token = token.substring(7);
        let objToken =  jwt_decode(token) as any;
        
        let usuario = JSON.parse(objToken.sub) as Usuario;

        this.usuarioSubject.next(usuario);
    }

    recuperarUsuario(): Observable<Usuario>{
        return this.usuarioSubject.asObservable();
    }

    recuperarToken(): string{
        if(!this.tokenService.temToken()) return null;
        this.logarUsuario(this.tokenService.getToken());
        return this.tokenService.getToken();
    }

    usuarioLogado(): boolean{
        if(this.tokenService.temToken()){
            this.logarUsuario(this.tokenService.getToken());
            return true;
        }
        return false;
    }

    deslogarUsuario(){
        this.tokenService.excluirToken();
        this.router.navigate(['/']);
    }

}