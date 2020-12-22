import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../app.contato.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private page_default:number = 0;
  private size_default:number = 4;

  private contatos: Array<Contato>;
  private totalPages:number = 1;

  constructor(private contatoService:ContatoService) { }

  ngOnInit() {
    this.buscarTodos(this.page_default,this.size_default);
  }

  getContatos(): Array<Contato>{
    return this.contatos;
  }

  getTotalPages(): number{
    return this.totalPages;
  }
  
  setSize(size:number){
    this.size_default = size;
    this.buscarTodos(this.page_default, this.size_default);
  }

  buscarPorPagina(pagina: any){
    this.buscarTodos(pagina,this.size_default);
  }

  buscarPorNome(nome:any){
    this.contatoService.buscarPorNome(nome,this.page_default,this.size_default).subscribe(res => {
      this.contatos = res.content;
      this.totalPages = res.totalPages;
    });
  }

  atualizarLista(){
    this.buscarTodos(this.page_default,this.size_default);
  }

  buscarTodos(page:number,size:number){
    this.contatoService.buscarTodos(page,size).subscribe(res => {
      this.contatos = res.content;
      this.totalPages = res.totalPages;
    });
  }

}
