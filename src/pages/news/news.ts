import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {NewsDetail} from "../news-detail/news-detail";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  url: string = 'http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts';
  items: any;

  constructor(public navCtrl: NavController, private http:Http) {
  }

  ionViewDidEnter() {
    this.http.get( this.url )
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.items = data;
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(NewsDetail, {
      item: item
    });
  }

}
