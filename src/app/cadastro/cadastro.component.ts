import { Component, OnInit } from '@angular/core';
import { Contato } from '../app.contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  maskCelular = ['(',/\d/,/\d/,')',' ','9',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  maskTelefone = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {    
  }

  enviar(formulario: any){
    let contato:Contato =  formulario.form.value;

    this.contatoService.cadastrar(contato).subscribe(res => console.log(res));

    formulario.reset();

    alert("Contato Cadastrado Com Sucesso!");

  }

}
