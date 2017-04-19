import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { News } from './news';

@NgModule({
  declarations: [
    News,
  ],
  imports: [
    IonicModule.forChild(News),
  ],
  exports: [
    News
  ]
})
export class NewsModule {}
