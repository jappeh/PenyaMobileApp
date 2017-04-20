import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {NewsService} from "../../providers/wp.service";
import {NewsDetail} from "../news-detail/news-detail";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',

  providers:[NewsService]
})
export class NewsPage {
  counter:number = 1;
  items: any[];

  constructor(public navCtrl: NavController, public newsService:NewsService) {
  }

  ionViewDidEnter() {
    this.newsService.getNews(this.counter).subscribe(data => this.items = data);
    this.counter++;
  }
  doInfinite(infiniteScroll){
    setTimeout(()=>{
      this.newsService.getNews(this.counter).subscribe(data => this.items= this.items.concat(data))
      this.counter++;
      console.log(this.items);
    },500);

    infiniteScroll.complete();
  }


  itemTapped(event, item) {
    this.navCtrl.push(NewsDetail, {
      item: item
    });
  }

}
