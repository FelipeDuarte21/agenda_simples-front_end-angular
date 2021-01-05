import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'busca',
    templateUrl: './busca.component.html'
})
export class BuscaComponent{

    @Input() totalPaginas:number;
    @Input() paginaAtual:number;

    @Output() buscarPorNome = new EventEmitter();
    @Output() alterarPagina = new EventEmitter();
    @Output() alterarQtdPorPagina = new EventEmitter();
    

    constructor(){}

    eventoBuscarPorNome(nome:string){
        return this.buscarPorNome.emit(nome);
    }

    eventoAlterarPagina(pagina:number){
        return this.alterarPagina.emit(pagina);
    }
    
    eventoAlterarQtdPorPagina(quantidade:number){
        return this.alterarQtdPorPagina.emit(quantidade);
    }

}