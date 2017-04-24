import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {WPService} from "../../providers/wp.service";
import {NewsDetail} from "../news-detail/news-detail";
import {Post} from "../../DTO/post";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',

  providers:[WPService]
})
export class NewsPage {
  counter:number;
  items: Post[]=null;
  searchInput:string ="";
  searchBool:boolean = false;

  constructor(public navCtrl: NavController, public wpService:WPService, private keyboard:Keyboard) {
    this.resetNews();
    keyboard.disableScroll(false);
  }

  doInfinite(infiniteScroll){
    setTimeout(()=>{
      this.wpService.getNews(this.counter).subscribe(data => this.items= this.items.concat(data));
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
    console.log(this.searchInput);
    if(this.searchInput!=""){
      this.searchBool = true;
      this.wpService.searchNews(this.searchInput).subscribe(data => this.items = data)
    }else {
      this.resetNews();
    }
    this.keyboard.close();
  }

  resetNews(){
    this.counter=1;
    this.wpService.getNews(this.counter).subscribe(data => this.items = data);
    this.counter++;
    this.keyboard.close();

  }

  closeKB(){
    this.keyboard.close();
  }



}
