import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user/user';
import { DashboardPage } from '../pages/dashboard/dashboard';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

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
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // HttpClient,
    // // HttpClientModule,
    // HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    UserProvider,
    
  ]
})
export class AppModule {}
