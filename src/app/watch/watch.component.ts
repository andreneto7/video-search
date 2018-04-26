import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  id: string;
  videoInfo: any;

  constructor(private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private _location: Location,
    private youtubeService: YoutubeService) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => this.id = params['id']); 
    this.youtubeService.getVideoInfo(this.id)
    .subscribe(
      data => {
        this.videoInfo = data['items'][0];
        console.log(JSON.stringify(data['items'][0]));
      },
      error => {
        console.log('Erro ao obter dados do video');
      });
  }

  getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.id);
  }

  back(){
    this._location.back();
  }
}
