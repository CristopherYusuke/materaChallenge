import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocalstorageService } from '../../service/localstorage.service';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})

export class UserDetailsPage {

  githubUser: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: LocalstorageService
    ) {
    this.githubUser = this.store.get('user');
  }
}
