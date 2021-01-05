import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContatoService } from '../contato.service';

import { Contato } from '../contato.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit { 

    campos: Array<string> = ['id','nome','telefone','celular','email'];

    contatos: Array<Contato>;

    paginaAtual: number = 0;
    qtdPorPagina: number = 4; 
    totalPaginas: number = 1;
    totalElementos: number = 0;

    private nome: string = null;

    constructor(
        private contatoService:ContatoService,
        private router: Router
    ) { }

    ngOnInit() {
        this.buscarTodos(this.paginaAtual,this.qtdPorPagina);
    }

    buscarTodos(paginaAtual:number,qtdPorPagina:number){
        this.contatoService.buscarTodos(paginaAtual,qtdPorPagina).subscribe(
            pagina => {
                this.contatos = pagina.content
                this.totalPaginas = pagina.totalPages;
                this.paginaAtual = paginaAtual;
                this.totalElementos = pagina.numberOfElements;
            }
        );
    }

    eventoBuscarPorNome(nome:string){
        this.nome = nome;
        if(this.nome.length == 0) this.nome == null;
        this.estadoAtual(0,this.qtdPorPagina);
    }

    eventoAlterarPagina(pagina:number){
        this.estadoAtual(pagina,this.qtdPorPagina);
    }

    eventoAlterarQtdPorPagina(quantidade:number){
        this.qtdPorPagina = quantidade;
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

    buscarPorNome(nome:string, pagina:number = 0){
        this.contatoService.buscarPorNome(nome,pagina,this.qtdPorPagina).subscribe(
            pagina => {
                this.contatos = pagina.content;
                this.totalPaginas = pagina.totalPages;
                this.paginaAtual = pagina.number;
            }
        );
    }

    eventoEditar(idContato:string){
        this.router.navigate(['/contatos/editar',idContato]);
    }

    eventoExcluir(idContato:string){
        if(confirm('Deseja realmente excluir contato?')){

            this.contatoService.excluir(idContato).subscribe(
                res => {
                    this.nome = null;
                    this.buscarTodos(0,this.qtdPorPagina);
                }
            );

        }
    }
    
}
