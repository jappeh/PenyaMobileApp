import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, Platform} from "ionic-angular";


import {SocialSharing} from "@ionic-native/social-sharing";
import {Toast} from "@ionic-native/toast";
import {WPService} from "../../providers/wp.service";
import {BookmarkService} from "../../providers/bookmark-service";

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
  providers: [WPService, BookmarkService]
})
export class NewsDetail {
  selectedItem: any;
  itemContent: any;
  itemDate: Date;
  errorMessage: String;
  comments: any[] = null;


  constructor(private p: Platform, private toast: Toast, private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams, private wpService: WPService, private bookmarkService: BookmarkService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.itemContent = this.selectedItem.content.rendered.replace(/<img[^>]*>/g, "");
    //this.itemDate.(this.selectedItem.date, 'pt', 'dd/MM/yyyy');
    this.itemDate = this.selectedItem.date;
    this.wpService.getComments(this.selectedItem.id).subscribe(data => this.comments = data)
  }

  share() {
    // Check if sharing via email is supported
    if (this.selectedItem.better_featured_image != null) {
      this.socialSharing.share(this.selectedItem.excerpt.rendered, this.selectedItem.title.rendered, this.selectedItem.better_featured_image.media_details.sizes.medium.source_url, this.selectedItem.link).then(() => {
      }).catch(() => {
        this.toast.show("Probeer opnieuw", '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }
  }

  addBookmark() {
    this.bookmarkService.addBookmark(this.selectedItem)
      .subscribe(item => this.selectedItem = item,
        error => this.errorMessage = <any>error);
  }
}
