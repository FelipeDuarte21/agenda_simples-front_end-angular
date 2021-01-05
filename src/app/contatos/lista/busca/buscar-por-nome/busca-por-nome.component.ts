import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'busca-por-nome',
  templateUrl: './busca-por-nome.component.html'
})
export class BuscaPorNomeComponent implements OnInit {

    formBuscaNome: FormGroup;
    
    @Output() nome = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.formBuscaNome = this.formBuilder.group({
            busca: ['']
        });
    }

    pesquisar(){
        let nome = this.formBuscaNome.get('busca').value;
        this.nome.emit(nome);
    }
 
} 
 