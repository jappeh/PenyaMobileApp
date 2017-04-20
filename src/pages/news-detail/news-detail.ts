import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import DateTimeFormat = Intl.DateTimeFormat;

/**
 * Generated class for the NewsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetail {
  selectedItem: any;
  itemContent: any;
  itemDate:Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.itemContent = this.selectedItem.content.rendered.replace(/<img[^>]*>/g,"");
    //this.itemDate.(this.selectedItem.date, 'pt', 'dd/MM/yyyy');
    this.itemDate = this.selectedItem.date;

  }
}
