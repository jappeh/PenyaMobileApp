import { NgModule } from '@angular/core';
import {IonicModule, IonicPage, IonicPageModule} from 'ionic-angular';
import { GameDetail } from './game-detail';

@NgModule({
  declarations: [
    GameDetail,
  ],
  imports: [
    IonicPageModule.forChild(GameDetail),
  ],
  exports: [
    GameDetail
  ]
})
export class GameDetailModule {}
