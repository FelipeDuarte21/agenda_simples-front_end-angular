import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ListaComponent } from './lista/lista.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { BuscaComponent } from './lista/busca/busca.component';

import { ContatoService } from './contato.service';
import { PaginacaoComponent } from './lista/paginacao/paginacao.component';
import { RemocaoComponent } from './remocao/remocao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DetalheComponent,
    ListaComponent,
    EdicaoComponent,
    BuscaComponent,
    PaginacaoComponent,
    RemocaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
