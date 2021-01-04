import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contato } from "../../contato.model";

@Component({
    selector: 'exibicao',
    templateUrl: './exibicao.component.html'
})
export class ExibicaoComponent{

    @Input() contatos: Array<Contato>;

    @Output() excluir = new EventEmitter();

    constructor(){}

    excluindo(){
        return this.excluir.emit('');
    }

}