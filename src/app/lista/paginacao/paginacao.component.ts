import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input() totalPages:number;
  @Output() onClickPagina = new EventEmitter();
  @Output() onChangeSeletor = new EventEmitter();

  private elementoAnterior: any;
  private carregado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getTotalPages(){
    if(this.totalPages == 0){
      this.carregado = false;
    }
    return new Array(this.totalPages);
  }

  setPrimeiroElemento(elemento:any, index:number){
   
    if(index === 0 && !this.carregado){
      elemento.classList.add("active");
      this.elementoAnterior = elemento;
      this.carregado = true;
    }

    return true;
  }

  onClick(index:number,elemento:any){

    if(this.elementoAnterior){
      this.elementoAnterior.classList.remove('active');
    }

    elemento.classList.add("active");

    this.elementoAnterior = elemento;

    return this.onClickPagina.emit(index);
  }

  onChange(size: number){
    this.carregado = false;
    this.elementoAnterior.classList.remove('active');
    this.elementoAnterior = undefined;
    return this.onChangeSeletor.emit(size);
  }

}
