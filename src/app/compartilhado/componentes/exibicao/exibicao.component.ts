import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "exibicao",
    templateUrl: './exibicao.component.html'
})
export class ExibicaoComponent{

    @Input() campos:Array<string>;
    @Input() objetoDados:Array<any>;

    @Input() exibeExcluir:boolean = true;
    @Input() exibeEditar: boolean = true;

    @Output() editar = new EventEmitter();
    @Output() excluir = new EventEmitter();

    constructor(){}

    eventoEditar(id:string){
        return this.editar.emit(id);
    }

    eventoExcluir(id:string){
        return this.excluir.emit(id);
    }


} 