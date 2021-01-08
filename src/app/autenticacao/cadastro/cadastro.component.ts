import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/compartilhado/usuario/usuario.service";
import { Usuario, UsuarioPerfilNumero } from "../../compartilhado/usuario/usuario.model";

@Component({
    selector: 'cadastro-usuario',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit{

    formCadastro: FormGroup;

    erro: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.formCadastro = this.formBuilder.group({
            nome: ['', 
                [
                    Validators.required,
                    Validators.maxLength(50)
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email,
                    Validators.maxLength(80)
                ]
            ],
            senha: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ]
            ],
            tipo: [[UsuarioPerfilNumero.ROLE_ADMIN]]
        });
    }

    verificaCampo(nome:string): boolean{
        return this.formCadastro.get(nome).errors && this.formCadastro.get(nome).touched;
    }

    cadastrar(){
        let usuario = this.formCadastro.getRawValue() as Usuario;

        this.usuarioService.cadastrar(usuario).subscribe(
            resp => {
                alert('Usuario cadastrado com sucesso!');
                this.router.navigate(['']);
            },
            error => {
                console.log(error),
                this.erro = true;
                this.formCadastro.reset();
            }
        )
        
    }

}