import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MascaraNumeroPipe } from "../mascara-numero.pipe";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    providers:[
        MascaraNumeroPipe
    ]
})
export class CardComponent{

    @Input() campos: Array<string>;

    @Input() objetoDados: Array<any>;

    @Input() exibeExcluir:boolean = true;
    @Input() exibeEditar: boolean = true;
    
    @Output() excluir = new EventEmitter();

    @Output() editar = new EventEmitter();

    constructor(){}

    eventoEditar(id:string){
        return this.editar.emit(id);
    }

    eventoExcluir(id:string){
        return this.excluir.emit(id);
    }

}