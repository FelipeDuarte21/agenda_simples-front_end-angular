import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../app.contato.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit { 

    formEdicao: FormGroup;

    maskCelular = ['(',/\d/,/\d/,')',' ','9',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

    constructor(
        private formBuilder:FormBuilder,
        private route:ActivatedRoute, 
        private router: Router,
        private contatoService:ContatoService
    ) {}

    ngOnInit() {

        let id = this.route.snapshot.params['id'];

        this.contatoService.buscarPorId(id).subscribe(contato => {

            this.formEdicao = this.formBuilder.group({
                id: [contato.id,Validators.required],
                nome: [contato.nome,
                    [
                        Validators.required,
                        Validators.maxLength(50)
                    ]
                ],
                celular: [contato.celular,Validators.required],
                telefone: [contato.telefone,Validators.required],
                email: [contato.email,
                    [
                        Validators.required,
                        Validators.email,
                        Validators.maxLength(80)
                    ]
                ]
            });

        });

    }

    alterar(){

        let contato = this.formEdicao.getRawValue() as Contato;

        this.contatoService.alterar(contato)
        .subscribe(res => {

            this.formEdicao.reset();

            this.router.navigate(['']);

            alert('Alterado com sucesso!');

        });

    }

} 
