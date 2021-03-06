import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from "../pages/news/news";
import {HttpModule} from "@angular/http";

import {IonicStorageModule} from "../../node_modules/@ionic/storage/es2015/index";
import {NewsDetail} from "../pages/news-detail/news-detail";
import {Toast} from "@ionic-native/toast";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarPage} from "../pages/calendar/calendar";
import {DateFilterPipe} from "../pipes/dateFilterPipe";
import {GameDetail} from "../pages/game-detail/game-detail";
import {BookmarkPage} from "../pages/bookmark/bookmark";

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    NewsDetail,
    CalendarPage,
    DateFilterPipe,
    GameDetail,
    BookmarkPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    NewsDetail,
    CalendarPage,
    GameDetail,
    BookmarkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    SocialSharing,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
