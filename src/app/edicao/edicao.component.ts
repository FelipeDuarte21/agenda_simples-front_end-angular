import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../app.contato.model';

@Component({
  selector: 'edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  maskCelular = ['(',/\d/,/\d/,')',' ','9',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

  private id:string;

  contato:Contato;

  constructor(private route:ActivatedRoute, private contatoService:ContatoService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.contatoService.buscarPorId(this.id).subscribe(contato => this.contato = contato);
  }

  alterar(f:any){
    let contato:Contato = f.form.value;

    this.contatoService.alterar(contato).subscribe(res => console.log(res));

    alert("Alterado Com Sucesso!");

    f.reset();
  }

} 
