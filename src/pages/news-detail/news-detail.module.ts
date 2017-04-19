import { NgModule } from '@angular/core';
import { NewsDetail } from './news-detail';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    NewsDetail,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetail),
  ],
  exports: [
    NewsDetail
  ]
})
export class NewsDetailModule {}
