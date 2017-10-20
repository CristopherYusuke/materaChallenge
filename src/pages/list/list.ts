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
  repos: Array<any>;
  sort: string = 'desc'
  order:any = {
    desc:{
      func (a,b) {
        return b.stargazers_count - a.stargazers_count
      },
      icon:"up"
    },
    asc:{
      func (a,b) {
        return a.stargazers_count - b.stargazers_count
      },
      icon:"down"
    }
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: LocalstorageService,
    private gitHubService : GithubService
  ) {
    let user = this.store.get('user')
    this.gitHubService
      .getUserRepo(user.login)
      .then(res =>{
        this.repos = res
        this.orderRepos()
      })
  }
  orderRepos () {
    this.repos = this.repos.sort(this.order[this.sort].func)
  }
  toggleRepos (){  
    this.sort = (this.sort == 'desc')? 'asc':'desc';
    this.orderRepos()
  }

  openRepoDetails(event, repo) {
    this.navCtrl.push(RepoDetailsPage, { repo });
  }
}
