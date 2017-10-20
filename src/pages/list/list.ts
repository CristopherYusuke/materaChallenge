import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { RepoDetailsPage } from '../repo-details/repo-details';

import { GithubService } from '../../service/github.service';
import { LocalstorageService } from '../../service/localstorage.service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  repos: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: LocalstorageService,
    private gitHubService : GithubService
  ) {
    let user = store.get('user')
    this.gitHubService
      .getUserRepo(user.login)
      .then(res => this.repos = res)
  }

  itemTapped(event, item) {
    this.navCtrl.push(RepoDetailsPage, { item });
  }
}
