import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'busca-por-nome',
  templateUrl: './busca-por-nome.component.html',
  styleUrls: ['./busca-por-nome.component.css']
})
export class BuscaPorNomeComponent implements OnInit {
  
  @Output() valor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pesquisar(f:any){
    this.valor.emit(f.form.value.busca);
  }

  setNome(f:any){
    this.valor.emit(f);
  }
 
} 
 