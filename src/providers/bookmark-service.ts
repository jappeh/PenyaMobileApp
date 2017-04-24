import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {BookmarkDTO} from "../DTO/bookmarkDTO";
import { Observable } from 'rxjs';

/*
  Generated class for the BookmarkService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookmarkService {

  url:string="./assets/mock/";

  constructor(public http: Http) {
    console.log('Hello BookmarkService Provider');
  }

  getBookmarks(){
    return this.http.get( this.url+"bookmarks")
    .map(res => res.json());
  }

  addBookmark(item:any): Observable<BookmarkDTO> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(item);
    return this.http.post(this.url+"bookmarks", body, options)
      .map((res: Response) => res.json())
      .catch(this.handleErrorObservable);
  }


  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
