import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioPerfil } from "../../compartilhado/usuario/usuario.model";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class LoginGuardService implements CanActivate{

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        
        if(this.usuarioService.usuarioLogado()){
            
            this.usuarioService.recuperarUsuario().subscribe(
                usuario => {

                    console.log(usuario);

                    let rota = '';

                    usuario.perfil.forEach(p => {
                        if(p === UsuarioPerfil.ROLE_ADMIN) rota = '/usuarios';
                        if(p === UsuarioPerfil.ROLE_USER) rota = '/contatos';
                    });

                    this.router.navigate([rota]);
                    return false;
                }
            );

        }

        return true;

    }

}