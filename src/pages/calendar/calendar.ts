import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../providers/game-service";
import {GameDetail} from "../game-detail/game-detail";

/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers:[GameService]
})
export class CalendarPage {
  games:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService:GameService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.gameService.getGames().subscribe(data =>
      this.games = data
    );
  }
  gameSelected(event, item) {
    console.log(item);
    console.log("gameSelected");
    this.navCtrl.push(GameDetail, {
      item: item
    });
  }

}
