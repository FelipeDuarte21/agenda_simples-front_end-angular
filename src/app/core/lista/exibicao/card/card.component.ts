import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contato } from "src/app/core/contato.model";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent{

    @Input() contatos: Array<Contato>;

    @Output() excluir = new EventEmitter();

    constructor(){}

    excluido(){
        return this.excluir.emit('excluido');
    }    

}