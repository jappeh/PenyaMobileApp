import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GameService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameService {
  url:string = "http://localhost:4200/"
  constructor(public http: Http) {
    console.log('Hello GameService Provider');
  }
  getGames(){
    return this.http.get( this.url+"games")
      .map(res => res.json());
  }

}
