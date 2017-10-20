import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomeIonicPage } from '../pages/home/home';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ListPage } from '../pages/list/list';
import { GithubService } from '../service/github.service';
import { LocalstorageService } from '../service/localstorage.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomeIonicPage,
    RepoDetailsPage,
    UserDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeIonicPage,
    RepoDetailsPage,
    UserDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GithubService,
    LocalstorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
