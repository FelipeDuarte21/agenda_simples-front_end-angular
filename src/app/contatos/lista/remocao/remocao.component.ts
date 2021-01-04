import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ContatoService } from '../../contato.service';

@Component({
  selector: 'remocao',
  templateUrl: './remocao.component.html',
  styleUrls: ['./remocao.component.css']
})
export class RemocaoComponent implements OnInit {

  @Input() id:string;
  @Output() excluido = new EventEmitter();

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {

  }

  excluir(){
    let resp = confirm("Deseja realmente excluir esse contato?");

    if(resp == true){
      this.contatoService.excluir(this.id).subscribe();
      this.excluido.emit('');
      alert("Contato Excluído Com Sucesso!");
    }

  }

}
