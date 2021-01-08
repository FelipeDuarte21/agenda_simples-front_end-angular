import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "../autenticacao/usuario/usuario.service";

@Injectable()
export class UsuarioGuardService implements CanActivate{

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(!this.usuarioService.recuperarToken()){
            this.router.navigate(['']);
            return false;
        }

        return true;
    }

}