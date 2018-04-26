import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

import { SearchService } from './../search.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input()
  url: string;
  @Input()
  searchField: string;
  private result: any;

  firstSearch: boolean = false;

  @Input()
  term: string = '';

  @Output() 
  onSearch = new EventEmitter();

  constructor(private searchService: SearchService) { }

  searchFromInput(){
    let params = {};
    params[this.searchField] = this.term;
    this.search(params, {});
    this.firstSearch = true;
  }

  search(params: any, headers: any){
    this.searchService.search(this.url, params, {})
      .subscribe(
        data => {
          data['term'] = this.term;
          this.searchService.setCachedResult({q: this.term, searchResult: data});
          this.onSearch.emit(data);
        },
        error => {
          this.onSearch.emit(JSON.stringify({error: 'Erro ao processar requisiçao', details: error}));
        });
      
  }

  next(pageParam, pageValue){
    let params = {};
    params[this.searchField] = this.term;
    params[pageParam] = pageValue;
    this.search(params, {});
  }

  ngOnInit() {
  }

}
