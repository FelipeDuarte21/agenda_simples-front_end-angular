import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  
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
 