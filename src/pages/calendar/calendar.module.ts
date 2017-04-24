import { NgModule } from '@angular/core';
import { CalendarPage } from './calendar';
import {IonicPageModule} from "../../../node_modules/ionic-angular/index";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
  exports: [
    CalendarPage
  ]
})
export class CalendarModule {}
