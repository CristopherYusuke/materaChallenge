import { Component } from '@angular/core';
import { AlertController ,Nav } from 'ionic-angular';

import { UserDetailsPage } from "../user-details/user-details";

import { GithubService } from '../../service/github.service';
import { LocalstorageService } from '../../service/localstorage.service';

@Component({
  selector: 'page-home-ionic',  
  templateUrl: 'home.html'
})
export class HomeIonicPage {

  username: String;

  constructor(
    private gitHubService: GithubService,
    private store : LocalstorageService,
    private nav: Nav,
    private alertCtrl: AlertController
  ) {
    // this.buscarUsuario()
  }
  buscarUsuario() {
    this
      .gitHubService
      .getUserDetail(this.username.trim())
      .then(res => {
        let user = res;
        this.store.set({key:"user",data:user})
        this.nav.setRoot(UserDetailsPage)
      })
      .catch(err => {
        this.showAlert({
          title:'Usuario não encontrado',
          subTitle:'',
          handler () {
            console.log('ok')
          }
        })
      })
  }

  showAlert({title, subTitle, handler}) {
    let alert = this.alertCtrl.create({
      title,
      subTitle,
      buttons: [{
        text: 'Ok',
        handler
      }]
    });
    alert.present();
  }
}
