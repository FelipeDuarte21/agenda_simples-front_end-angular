import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({providedIn: 'root'})
export class InterceptadorService implements HttpInterceptor{

    constructor(
        private usuarioService: UsuarioService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.usuarioService.recuperarToken();

        if(token){

            req = req.clone({
                setHeaders: {
                    "Authorization":token
                }
            })

        }

        return next.handle(req);
    }

}