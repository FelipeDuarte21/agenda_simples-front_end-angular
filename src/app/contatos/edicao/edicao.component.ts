import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesmascaraNumeroPipe } from '../desmascara-numero.pipe';

@Component({
  selector: 'edicao',
  templateUrl: './edicao.component.html',
  providers: [
    DesmascaraNumeroPipe
  ]
})
export class EdicaoComponent implements OnInit { 

    formEdicao: FormGroup;

    maskCelular = ['(',/\d/,/\d/,')',' ','9',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

    constructor(
        private formBuilder:FormBuilder,
        private route:ActivatedRoute, 
        private router: Router,
        private contatoService:ContatoService,
        private desmascaraNumero: DesmascaraNumeroPipe
    ) {}

    ngOnInit() {

        this.formEdicao = this.formBuilder.group({
            id: ['',Validators.required],
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

        let id = this.route.snapshot.params['id'];

        this.contatoService.buscarPorId(id).subscribe(
            contato => {
                this.formEdicao.get('id').setValue(contato.id);
                this.formEdicao.get('nome').setValue(contato.nome);
                this.formEdicao.get('celular').setValue(contato.celular);
                this.formEdicao.get('telefone').setValue(contato.telefone);
                this.formEdicao.get('email').setValue(contato.email);
            }
        );

    }

    verificaCampo(nome:string): boolean{
        return this.formEdicao.get(nome).errors && this.formEdicao.get(nome).touched;
    }

    alterar(){

        let contato = this.formEdicao.getRawValue() as Contato;

        contato.celular = this.desmascaraNumero.transform(contato.celular);
        contato.telefone = this.desmascaraNumero.transform(contato.telefone);

        this.contatoService.alterar(contato).subscribe(
            res => {
                this.router.navigate(['']);
                this.formEdicao.reset();
            }
        );

    }

} 
