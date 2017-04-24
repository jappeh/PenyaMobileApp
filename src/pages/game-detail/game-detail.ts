import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetail {
  private selectedGame: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGame = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetail');
  }

}
