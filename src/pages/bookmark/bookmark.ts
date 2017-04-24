import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {BookmarkService} from "../../providers/bookmark-service";
import {BookmarkDTO} from "../../DTO/bookmarkDTO";
import {NewsDetail} from "../news-detail/news-detail";
import {SocialSharing} from "@ionic-native/social-sharing";

/**
 * Generated class for the BookmarkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [BookmarkService]
})
export class BookmarkPage {
  bookmarks:BookmarkDTO[];
  errorMessage: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, public bookmarkService:BookmarkService, private socialSharing:SocialSharing, private toastCtrl:ToastController) {
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe( bookmarks => this.bookmarks = bookmarks,
        error => this.errorMessage = <any>error);
  }

  bookmarkTapped(event, bookmark) {
    this.navCtrl.push(NewsDetail, {
      item: bookmark
    });
  }

  deleteBookmark(bookmark:BookmarkDTO){
    //TODO this.bookmarkService.deleteBookmark(bookmark)
  }

  // bookmark = news item
  shareBookmark(bookmark:any){
    // Check if sharing via email is supported
    if (bookmark.better_featured_image != null) {
      this.socialSharing.share(bookmark.excerpt.rendered, bookmark.title.rendered, bookmark.better_featured_image.media_details.sizes.medium.source_url, bookmark.link).then(() => {
      }).catch(() => {
        //TODO:error message -> label (multi lang)
        let toast = this.toastCtrl.create({
          message: 'Error sharing',
          duration: 3000
        });
        toast.present();
      });
    }
  }

  /*
   addBook(): void {
   this.bookService.addBookWithObservable(this.book)
   .subscribe( book => this.bookName = book.name,
   error => this.errorMessage = <any>error);
   this.fetchBooks();
   this.reset();
   }
   */

}
