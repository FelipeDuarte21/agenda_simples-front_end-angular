import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioPerfil } from "../../compartilhado/usuario/usuario.model";
import { UsuarioService } from "../usuario/usuario.service";
import { LoginService } from "./login.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit{

    formLogin: FormGroup;

    erro: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            email: ['',[Validators.required,Validators.email]],
            senha: ['',Validators.required]
        });
    }


    logar(){
        let email = this.formLogin.get('email').value;
        let senha = this.formLogin.get('senha').value;

        this.loginService.logar(email,senha).subscribe(
            res => {
                
                this.usuarioService.recuperarUsuario().subscribe(
                    usuario => {

                        let rota = '';
                        
                        usuario.perfil.forEach(p => {
                            if(p === UsuarioPerfil.ROLE_ADMIN) rota = '/usuarios';
                            if(p === UsuarioPerfil.ROLE_USER) rota = '/contatos';
                        });

                        this.router.navigate([rota]);
                    }
                );

            },
            err => {
                console.log(err),
                this.erro = true;
            }
        );

    }

}