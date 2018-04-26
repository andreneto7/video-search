import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiKey = 'AIzaSyBTo8mOJjxoqYSXEkdIZQdz07ldQndgKaA';

@Injectable()
export class YoutubeService {



  constructor(private http: HttpClient) { 

  }

  getVideoInfo(videoId:string){
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&part=snippet,statistics&key=' + apiKey);
  }

  search(term: string){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=' + apiKey + '&q=' + term);
  }

  searchWithPage(term:string, pageId:string){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=' + apiKey + '&q=' + term + '&pageToken' + pageId);
 
  }

}
