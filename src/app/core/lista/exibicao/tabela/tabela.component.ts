import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Contato } from "src/app/core/contato.model";

@Component({
    selector: 'tabela',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css']
})
export class TabelaComponent{

    @Input() contatos: Array<Contato>;

    @Output() excluir = new EventEmitter();

    constructor(){}

    excluindo(){
        this.excluir.emit('');
    }

}