import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input() totalPages:number = 0;
  @Input() currentPage: number = 0;
  @Output() onClickPagina = new EventEmitter();
  @Output() onChangeSeletor = new EventEmitter();

  constructor() { }

  ngOnInit() { 
  }

  nextOrPreviousPage(page: number){
    this.currentPage = page;
    return this.onClickPagina.emit(page);
  }

  onChange(size: number){
    return this.onChangeSeletor.emit(size);
  }

}
