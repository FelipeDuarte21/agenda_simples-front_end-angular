import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toUnicode } from 'punycode';
import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';
import { DesmascaraNumeroPipe } from '../desmascara-numero.pipe';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

    formCadastro: FormGroup;

    maskCelular = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

    erro:boolean = false;

    mensagemErro: string = "";

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private contatoService: ContatoService,
        private desmascaraNumero: DesmascaraNumeroPipe
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

        contato.celular =  this.desmascaraNumero.transform(contato.celular);
        contato.telefone = this.desmascaraNumero.transform(contato.telefone);

        this.contatoService.cadastrar(contato)
            .subscribe(
                res => {
                    this.formCadastro.reset();
                    this.router.navigate(['']);
                },
                err => {
                    console.log(err.error.message);
                    this.mensagemErro = err.error.message;
                    this.erro = true;
                    this.formCadastro.reset();
                }
            );

    }

}
