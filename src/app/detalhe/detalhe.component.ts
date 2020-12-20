import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../app.contato.model';

@Component({
  selector: 'detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  private id: string;

  contato: Contato;

  constructor(private route: ActivatedRoute,private contatoService:ContatoService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() { 
    this.contatoService.buscarPorId(this.id).subscribe(contato => this.contato = contato);
  }

  

}
