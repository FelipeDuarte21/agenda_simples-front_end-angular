import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'busca',
    templateUrl: './busca.component.html'
})
export class BuscaComponent{

    @Input() totalDePaginas:number;
    @Input() paginaAtual:number;

    @Output() buscarPorNome = new EventEmitter();
    @Output() emitQtdPorPagina = new EventEmitter();
    @Output() emitBuscarPorPagina = new EventEmitter();

    constructor(){}

    eventoBuscarPorNome(nome:string){
        return this.buscarPorNome.emit(nome);
    }

    qtdPorPagina(qtd:string){
        return this.emitQtdPorPagina.emit(qtd);
    }

    buscarPorPagina(pagina:string){
        return this.emitBuscarPorPagina.emit(pagina);
    }

} 