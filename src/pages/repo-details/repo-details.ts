import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})

export class RepoDetailsPage {
  repo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.repo = navParams.get('repo');
  }
}
