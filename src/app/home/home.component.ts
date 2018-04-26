import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AnonymousSubject } from 'rxjs/Subject';

import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: any = [];
  items: any = [];
  firstSearch: boolean = false;
  term: string;

  constructor(public dialog: MatDialog, private youtubeService: YoutubeService) { }

  ngOnInit() {

    let term = localStorage.getItem('term');
    if (term){
      this.term = term;
    }

    let result = localStorage.getItem('searchResult');
    if (result){
      this.result = JSON.parse(result);
    }
    
    let items = localStorage.getItem('items');
    if (items){
      this.items = JSON.parse(items);
      this.firstSearch = true;
    }
  }

  search(){
    console.log(this.term);
    this.youtubeService.search(this.term)
    .subscribe(
      data => {
        this.prepareResults(data);
      },
      error => {
        console.log('Erro ao processar consulta.')
      });
  }

  nextPage(pageId:string){
    this.youtubeService.searchWithPage(this.term, pageId)
    .subscribe(
      data => {
        this.prepareResults(data);
      },
      error => {
        console.log('Erro ao processar consulta.')
      });
  }

  previous(){

  }

  prepareResults(data:any){

    this.result = data;
        this.firstSearch = true;
        if (this.term != localStorage.getItem('term')){
          this.items = [];
        }
        data['items'].forEach(element => {
          this.items.push(element);      
        });

        localStorage.setItem('term', this.term);
        localStorage.setItem('items', JSON.stringify(this.items));
        localStorage.setItem('searchResult', JSON.stringify(data));

  }

}
