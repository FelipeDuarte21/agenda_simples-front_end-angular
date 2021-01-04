import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Contato, MyObject } from './contato.model';

import { API_ROUTER } from '../app-api-routing';

@Injectable()
export class ContatoService { 

  private API:string = `${API_ROUTER}/contato`;

  constructor(private http: HttpClient) { }

  buscarTodos(page: number, size: number): Observable<MyObject>{
    return this.http.get<MyObject>(`${this.API}?pagina=${page}&qtdPorPagina=${size}`);
  }

  buscarPorNome(nome:string,page:number,size: number): Observable<MyObject>{
    return this.http.get<MyObject>(`${this.API}/search?nome=${nome}&pagina=${page}&qtdPorPagina=${size}`);
  }

  buscarPorId(id:string): Observable<Contato>{
    return this.http.get<Contato>(`${this.API}/${id}`);
  }

  cadastrar(contato:Contato): Observable<Contato>{
    return this.http.post<Contato>(this.API,contato);
  }

  alterar(contato:Contato): Observable<Contato>{
    return this.http.put<Contato>(this.API,contato);
  }

  excluir(id: string): Observable<any>{
    return this.http.delete(`${this.API}/${id}`);
  }
 
}
