import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class SearchService {

  private cachedResult: any;

  constructor(private http: HttpClient) { }

  search(url: string, params: any, headers: any){
    return this.http.get(url,  {headers, params});
  }

  setCachedResult(data){
    this.cachedResult = data;
  }

  getCachadResult(){
    return this.cachedResult;
  }

}
