import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav ,AlertController} from 'ionic-angular';

import { HomeIonicPage } from '../pages/home/home';
import {  UserDetailsPage } from '../pages/user-details/user-details';
import { ListPage } from '../pages/list/list';

import { LocalstorageService } from "../service/localstorage.service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomeIonicPage the root (or first) page
  rootPage = HomeIonicPage;
  pages: Array<{title: string, component: any, isValid:object }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private store : LocalstorageService,
    private alertCtrl : AlertController
  ) {
    this.initializeApp();
    
    this.pages = [
      { title: 'Busca Usuario', component: HomeIonicPage, isValid:()=> true },
      { title: 'Detalhes Usuario', component: UserDetailsPage, isValid:() => this.hasUser() },
      { title: 'Lista Repositorio', component: ListPage, isValid:() => this.hasUser() }
    ];
  }

  hasUser ():boolean {
    console.log(this.store);
    
    let user = !!this.store.get('user')
    if(!user){
      this.showAlert({title:"Usuario não buscado",subTitle:"Favor buscar usuario na pagina principal"})
    }

    return user
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showAlert({title, subTitle}) {
    let alert = this.alertCtrl.create({
      title,
      subTitle,
      buttons: ['Ok']
    });
    alert.present();
  }
  openPage(page) {
    this.menu.close();
    if(page.isValid()){
      this.nav.setRoot(page.component);
    }
  }
}
