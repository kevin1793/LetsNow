import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import firebase from 'firebase';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	isUserLoggedIn = false;

	userInfo: any = {};

	constructor(public navCtrl: NavController, public fb: Facebook) {

	}

	// login(){
	// 	let provider = new firebase.auth.FacebookAuthProvider();

	// 	firebase.auth().signInWithRedirect(provider).then( () => {
	// 		firebase.auth().getRedirectResult().then((result) => {
	// 			alert(JSON.stringify(result));
	// 		}).catch(function(error) {
	// 			alert(JSON.stringify(error))
	// 		});
	// 	})
	// }
	login(){
		this.fb.login(["public_profile","email"]).then( loginRes => {
			this.fb.api('me/?fields=id,email,first_name,picture',["public_profile","email"]).then( apiRes => {
				this.userInfo = apiRes;
				this.isUserLoggedIn = true;

			}).catch(apiErr => console.log(apiErr));
		}).catch(loginErr => console.log(loginErr))
	}

	logout(){
		this.fb.logout().then( logoutRes => 
			this.isUserLoggedIn = false
		).catch(logoutErr => 
			console.log(logoutErr))
	}

	// logout(){
	// 	let provider = new firebase.auth.FacebookAuthProvider();

	// 	firebase.auth().signOut().then( () => {
	// 		firebase.auth().getRedirectResult().then((result) => {
	// 			alert(JSON.stringify(result));
	// 		}).catch(function(error) {
	// 			alert(JSON.stringify(error))
	// 		});
	// 	})
	// }

}
