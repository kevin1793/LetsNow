import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import firebase from 'firebase';
import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { SignupPage } from '../signup/signup';
import { UserProvider } from '../../providers/user/user';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	isUserLoggedIn = false;

	userInfo: any = {};

  constructor(  public navCtrl: NavController,
                public fb: Facebook,
                public userService: UserProvider,
              ) {

	}


	login(){
		this.fb.login(["public_profile","email"]).then( loginRes => {
			this.fb.api('me/?fields=id,email,first_name,picture',["public_profile","email"]).then( apiRes => {
				this.userInfo = apiRes;
				this.isUserLoggedIn = true;
				
				this.userService.userInfo = this.userInfo;
        
				if(this.isUserLoggedIn === true){
				this.userService.isUserLoggedIn = true; 
				this.navCtrl.push(DashboardPage);
				}


			}).catch(apiErr => console.log(apiErr));
		}).catch(loginErr => console.log(loginErr))
	}

	logout(){
		this.fb.logout().then( logoutRes => 
			this.isUserLoggedIn = false
		).catch(logoutErr => 
			console.log(logoutErr))
	}

}
