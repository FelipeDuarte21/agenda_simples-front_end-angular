import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html'
})
export class PaginacaoComponent{

    @Input() totalPaginas:number = 0;
    @Input() paginaAtual: number = -1;

    @Output() alterarPagina = new EventEmitter();
    @Output() alterarQtdPorPagina = new EventEmitter();

    constructor() { }

    eventoAlterarPagina(pagina:number){
        this.paginaAtual = pagina;
        return this.alterarPagina.emit(pagina);
    }

    eventoAlterarQtdPorPagina(quantidade:number){
        return this.alterarQtdPorPagina.emit(quantidade);
    }

}
 