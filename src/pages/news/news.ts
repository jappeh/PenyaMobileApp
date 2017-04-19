import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {NewsService} from "../../providers/wp.service";
import {NewsDetail} from "../news-detail/news-detail";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',

  providers:[NewsService]
})
export class NewsPage {

  url: string = 'http://www.fanatiek-fcbarcelona.be/wp-json/wp/v2/posts';
  items: any;

  constructor(public navCtrl: NavController, public newsService:NewsService) {
  }

  ionViewDidEnter() {
    this.newsService.getNews().subscribe(data => this.items = data);
  }

  itemTapped(event, item) {
    this.navCtrl.push(NewsDetail, {
      item: item
    });
  }

}
