import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {
  items: any;
  constructor(public http: Http) {

  }

  getNews(page:number){
    return this.http.get( 'http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts?page='+page)
      .map(res => res.json());
  }
  searchNews(search:string){
    return this.http.get( "http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts?search='"+search+"'")
      .map(res => res.json());
  }


}
