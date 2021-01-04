import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioPerfilNumero } from "../usuario/usuario.model";
import { CadastroUsuarioService } from "./cadastro-usuario.service";

@Component({
    selector: 'cadastro-usuario',
    templateUrl: './cadastro.component.html',
    providers: [CadastroUsuarioService]
})
export class CadastroComponent implements OnInit{

    formCadastro: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private cadastroUsuarioService: CadastroUsuarioService,
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
            tipo: [[UsuarioPerfilNumero.ROLE_USER]]
        });
    }

    verificaCampo(nome:string): boolean{
        return this.formCadastro.get(nome).errors && this.formCadastro.get(nome).touched;
    }

    cadastrar(){
        let usuario = this.formCadastro.getRawValue();

        this.cadastroUsuarioService.cadastrar(usuario).subscribe(
            resp => {
                console.log(resp);

                alert('Usuario cadastrado com sucesso!');

                this.router.navigate(['']);

            }
        )
        
    }

}