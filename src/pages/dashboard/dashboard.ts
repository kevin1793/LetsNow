import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  isUserLoggedIn = true;

	userInfo: any = {};

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public userService: UserProvider,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
