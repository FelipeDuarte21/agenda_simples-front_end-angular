import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato, MyObject } from 'src/app/core/contato.model';
import { ContatoService } from 'src/app/core/contato.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    contatos: Array<Contato>;

    paginaAtual:number = 0;
    qtdPorPagina:number = 4; 
    totalDePaginas:number = 1;

    private nome:string = null;

    constructor(private contatoService:ContatoService) { }

    ngOnInit() {
        this.buscarTodos(this.paginaAtual,this.qtdPorPagina);
    }

    buscarTodos(paginaAtual:number,qtdPorPagina:number){
        this.contatoService.buscarTodos(paginaAtual,qtdPorPagina)
            .subscribe(res => {
                this.contatos = res.content;
                this.totalDePaginas = res.totalPages;
                this.paginaAtual = paginaAtual;
            });
    }

    buscarPorPagina(pagina: any){
        this.estadoAtual(pagina,this.qtdPorPagina);
    }

    setQtdPorPagina(qtd:number){
        this.qtdPorPagina = qtd;
        this.paginaAtual = 0;
        this.estadoAtual(this.paginaAtual,this.qtdPorPagina);
    }

    estadoAtual(pagina:number,qtdPorPagina:number = 0){
        if(!this.nome){
            this.buscarTodos(pagina,qtdPorPagina);
        }else{
            this.buscarPorNome(this.nome,pagina);
        }
    }

    setNome(nome:string){
        this.nome = nome;
        if(this.nome.length == 0) this.nome == null;
        this.estadoAtual(0,this.qtdPorPagina);
    }

    buscarPorNome(nome:string, pagina:number = 0){
        this.contatoService.buscarPorNome(nome,pagina,this.qtdPorPagina)
        .subscribe(res => {
            this.contatos = res.content;
            this.totalDePaginas = res.totalPages;
            this.paginaAtual = res.number;
        });
    }

    atualizarLista(){
        this.buscarTodos(0,this.qtdPorPagina);
    }
    
}
