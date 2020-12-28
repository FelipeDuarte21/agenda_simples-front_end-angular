import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from '../app.contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    formCadastro: FormGroup;

    maskCelular = ['(',/\d/,/\d/,')',' ','9',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private contatoService: ContatoService
    ) { }

    ngOnInit() {     
        this.formCadastro = this.formBuilder.group({
            nome: ['',
                [
                    Validators.required,
                    Validators.maxLength(50)
                ]
            ],
            celular: ['',Validators.required],
            telefone: ['',Validators.required],
            email: ['',
                [
                    Validators.required,
                    Validators.email,
                    Validators.maxLength(80)
                ]
            ]
        });
    } 

    verificaCampo(nome:string): boolean{
        return this.formCadastro.get(nome).errors && this.formCadastro.get(nome).touched;
    }

    enviar(){

        let contato = this.formCadastro.getRawValue() as Contato;

        this.contatoService.cadastrar(contato)
            .subscribe(res => {
                console.log(res);
                this.formCadastro.reset();
                this.router.navigate(['']);
                alert('Contato Cadastrado com Sucesso!');
            });
    }

}
