import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {NewsService} from "../../providers/wp.service";
import {NewsDetail} from "../news-detail/news-detail";
import {Post} from "../../DTO/post";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',

  providers:[NewsService]
})
export class NewsPage {
  counter:number;
  items: Post[]=null;
  searchInput:string ="";
  searchBool:boolean = false;

  constructor(public navCtrl: NavController, public newsService:NewsService) {
    this.resetNews()
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
  searchNews(event){
    console.log(this.searchInput)
    if(this.searchInput!=""){
      this.searchBool = true;
      this.newsService.searchNews(this.searchInput).subscribe(data => this.items = data)
    }else {
      this.resetNews();
    }
  }
  resetNews(){
    this.counter=1;
    this.newsService.getNews(this.counter).subscribe(data => this.items = data);
    this.counter++;
  }

}
