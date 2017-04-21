import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, Platform} from "ionic-angular";


import {SocialSharing} from "@ionic-native/social-sharing";
import {Toast} from "@ionic-native/toast";

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
  itemDate: Date;


  constructor(private p: Platform, private toast: Toast,private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.itemContent = this.selectedItem.content.rendered.replace(/<img[^>]*>/g, "");
    //this.itemDate.(this.selectedItem.date, 'pt', 'dd/MM/yyyy');
    this.itemDate = this.selectedItem.date;

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
}
