import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { Contato, MyObject } from './app.contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService { 

  private API:string = "http://localhost:8080/contato";

  constructor(private http: Http) { }

  buscarTodos(page: number, size: number): Observable<MyObject>{
    return this.http.get(`${this.API}?page=${page}&size=${size}`).pipe(map(res => res.json()));
  }

  buscarPorNome(nome:string,page:number,size: number): Observable<MyObject>{
    return this.http.get(`${this.API}/search?nome=${nome}&page=${page}&size=${size}`).pipe(map(res => res.json()));
  }

  buscarPorId(id:string): Observable<Contato>{
    return this.http.get(`${this.API}/${id}`).pipe(map(res => res.json()));
  }

  cadastrar(contato:Contato): Observable<Contato>{
    return this.http.post(this.API,contato).pipe(map(res => res.json()));
  }

  alterar(contato:Contato): Observable<Contato>{
    return this.http.put(this.API,contato).pipe(map(res => res.json()));
  }

  excluir(id: string): Observable<any>{
    return this.http.delete(`${this.API}/${id}`);
  }
 
}
