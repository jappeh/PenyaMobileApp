import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Post} from "../DTO/post";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {
  constructor(public http: Http) {

  }

  getNews(page:number): Observable<Post[]>{
    return this.http.get( 'http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts?page='+page)
      .map(res => res.json());
  }
  searchNews(search:string){
    return this.http.get( "http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts?search='"+search+"'")
      .map(res => res.json());
  }
  getComments(postId:number){
    return this.http.get( "http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/comments?post="+postId)
      .map(res => res.json());
  }
}
