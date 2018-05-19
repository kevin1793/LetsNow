import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

firebase.initializeApp({apiKey: "AIzaSyDeBNxE2j9hSvVBDyMWvj-DiIAJS50C7no",
  authDomain: "letsnow-8dae9.firebaseapp.com",
  databaseURL: "https://letsnow-8dae9.firebaseio.com",
  projectId: "letsnow-8dae9",
  storageBucket: "letsnow-8dae9.appspot.com",
  messagingSenderId: "580965348769"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
